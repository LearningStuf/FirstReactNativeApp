import {useState} from 'react'
import { useRouter } from 'expo-router'
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import styles from './nearbyjobs.style'
import  {COLORS, SIZES}  from '../../../constants';
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard';
import useFetch from '../../../hook/useFetch';

const Nearbyjobs = () => {
  const router = useRouter();

  const { data, isLoading, error } = useFetch("https://www.themealdb.com/api/json/v1/1/categories.php", "");

  var newData = data.categories

  console.log(data)

  return (
    <View style = {styles.container}>
      <View style = {styles.header}>
        <Text style = {styles.headerTitle}>Select Category</Text>
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
          newData?.map((categ) => (
            <NearbyJobCard
              job = {categ}
              key  = {'categ-${categ?.idCategory}'}
              handleNavigate = {() => router.push(`/recipe-details/${categ.idCategory}`)}
            />
          ))
        )}
      </View>
    </View>
  )
}

export default Nearbyjobs