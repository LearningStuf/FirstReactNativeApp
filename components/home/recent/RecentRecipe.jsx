import {useState, useEffect} from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'

import styles from './RecentRecipe.style'
import  {COLORS, SIZES}  from '../../../constants';
import PopulaJobCard from '../../common/cards/popular/PopularJobCard';
import useFetch from '../../../hook/useFetch';
import * as SQLite from 'expo-sqlite';


const RecentRecipe = () => {

  const router = useRouter();
  const [meals, setMeals] = useState([]);
  const db = SQLite.openDatabase('example.db');
  // const isLoading  = false;
  // const error = false;

  // const {data, isLoading, error} = useFetch()
  const { data, isLoading, error } = useFetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast", "");
 
  // console.log(data)
  var newData = data.meals

  useEffect(() => {
    db.transaction(tx => {
      tx.executeSql('CREATE TABLE IF NOT EXISTS mealsRecent (id INTEGER PRIMARY KEY AUTOINCREMENT, mealId INTEGER, mealThumb TEXT, mealName TEXT)')
    });

    db.transaction(tx => {
      tx.executeSql('SELECT * FROM mealsRecent', null,
        (txObj, resultSet) => setMeals(resultSet.rows._array),
        (txObj, error) => console.log(error)
      );
    });
  }, []);






  return (
    <View style = {styles.container}>
      <View style = {styles.header}>
        <Text style = {styles.headerTitle}>Recent Recipies</Text>
        <TouchableOpacity
              onPress = {() =>
                {
                  
                  db.transaction(tx => {
                    tx.executeSql('DELETE FROM mealsRecent' , null,
                      (txObj, resultSet) => {
                        console.log("all deleted")
                      },
                      (txObj, error) => console.log(error)
                    );
                  });
                  
                  

      
      
                }}>
          <Text style = {styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
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

export default RecentRecipe