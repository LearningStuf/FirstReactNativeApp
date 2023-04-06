import {useState} from 'react'
import { useRouter } from 'expo-router'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import styles from './popularjobs.style'
import  {COLORS, SIZES}  from '../../../constants';
import PopulaJobCard from '../../common/cards/popular/PopularJobCard';
import useFetch from '../../../hook/useFetch';

const Popularjobs = () => {
  const router = useRouter();
  // var url = "https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast"
  const { data, isLoading, error } = useFetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast", "");

  var newData = data.meals
  const [selectedJob, setSelectedJob] = useState();

  const handleCardPress = (item) => {
    router.push(`/recipe-details/${item.idMeal}`);
    setSelectedJob(item.idMeal);
  };

  return (
    <View style = {styles.container}>
      <View style = {styles.header}>
        <Text style = {styles.headerTitle}>Saved Recipies</Text>
        <TouchableOpacity>
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
            data = {newData}
            renderItem={({item}) => (
              <PopulaJobCard 
                item = {item}
                selectedJob={selectedJob}
                handleCardPress={handleCardPress}
              />
            )}
            keyExtractor = {item => item?.idMeal}
            contentContainerStyle = {{columnGap: SIZES.medium}}
            horizontal
          />
        )}
      </View>
    </View>
  )
}

export default Popularjobs