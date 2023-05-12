import {useState, useEffect} from 'react'
import { useRouter, useSearchParams } from 'expo-router'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import styles from './popularjobs.style'
import  {COLORS, SIZES}  from '../../../constants';
import PopulaJobCard from '../../common/cards/popular/PopularJobCard';
import useFetch from '../../../hook/useFetch';
import * as SQLite from 'expo-sqlite';

const Popularjobs = () => {
  const router = useRouter();
  const params = useSearchParams();
  const [meals, setMeals] = useState([]);
  const db = SQLite.openDatabase('example.db');
  const [pageCheker, setPageChecker] = useState(1);
  

  useEffect(() => {
    db.transaction(tx => {
      tx.executeSql('CREATE TABLE IF NOT EXISTS mealsTest (id INTEGER PRIMARY KEY AUTOINCREMENT, mealId INTEGER, mealThumb TEXT, mealName TEXT)')
    });

    db.transaction(tx => {
      tx.executeSql('SELECT * FROM mealsTest', null,
        (txObj, resultSet) => setMeals(resultSet.rows._array),
        (txObj, error) => console.log(error)
      );
    });
  }, [params]);


  // console.log("This is the meals", meals)

  // var url = "https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast"
  const { data, isLoading, error } = useFetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast", "");

  var newData = data.meals

  // console.log("This is the data", newData)
  const [selectedJob, setSelectedJob] = useState();

  const handleCardPress = (item) => {
    router.push(`/meal/${item.mealId}`);
    setSelectedJob(item.idMeal);
    // console.log("This is the item", item)
  };

  return (
    <View style = {styles.container}>
      <View style = {styles.header}>
        <Text style = {styles.headerTitle}>Saved Recipies</Text>
        {/* <TouchableOpacity>
          <Text style = {styles.headerBtn}>Show all</Text>
        </TouchableOpacity> */}
      </View>
      <View style = {styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ?(
          <Text>Something went wrogn</Text>
        ) : (
          <FlatList
            data = {meals}
            renderItem={({item}) => (
              <PopulaJobCard 
                item = {item}
                selectedJob={selectedJob}
                handleCardPress={handleCardPress}
              />
            )}
            keyExtractor = {item => item?.id}
            contentContainerStyle = {{columnGap: SIZES.medium}}
            horizontal
          />
        )}
      </View>
    </View>
  )
}

export default Popularjobs