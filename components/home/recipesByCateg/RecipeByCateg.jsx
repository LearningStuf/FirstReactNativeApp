import {useState} from 'react'
import { useRouter } from 'expo-router'
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import styles from './RecipeByCateg.style'
import  {COLORS, SIZES}  from '../../../constants';
// import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard';
import MealByCategCard from '../../common/cards/mealByCateg/MealByCategCard';
import useFetch from '../../../hook/useFetch';

const RecipeByCateg = (url) => {
  const router = useRouter();
  const newUrl = url.url;

    // console.log("this is the url being passed", newUrl)

  const { data, isLoading, error } = useFetch(newUrl, "");

  var newData = data.meals
//   console.log("this is the data being returned0", data)

  // console.log("The data being genereated", newData)

  return (
    <View style = {styles.container}>
      <View style = {styles.header}>
        <Text style = {styles.headerTitle}>{url.item}</Text>
        {/* <TouchableOpacity>
          <Text style = {styles.headerBtn}>Show all</Text>
        </TouchableOpacity> */}
      </View>
      <View style = {styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ?(
          <Text>Something went wrong</Text>
        ) : (
          newData?.map((meal) => (
            <MealByCategCard
              job = {meal}
              key  = {meal?.idMeal}
              handleNavigate = {() => router.push(`/meal/${meal.idMeal}`)}
            />
          ))
        )}
      </View>
    </View>
  )
}

export default RecipeByCateg