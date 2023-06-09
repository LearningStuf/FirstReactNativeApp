import {useState} from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'

import styles from './RecentRecipe.style'
import  {COLORS, SIZES}  from '../../../constants';
import PopulaJobCard from '../../common/cards/popular/PopularJobCard';
import useFetch from '../../../hook/useFetch';

const RecentRecipe = () => {

  const router = useRouter();
  // const isLoading  = false;
  // const error = false;

  // const {data, isLoading, error} = useFetch()
  const { data, isLoading, error } = useFetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast", "");

  // console.log(data)
  var newData = data.meals

  return (
    <View style = {styles.container}>
      <View style = {styles.header}>
        <Text style = {styles.headerTitle}>Recent Recipies</Text>
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

export default RecentRecipe