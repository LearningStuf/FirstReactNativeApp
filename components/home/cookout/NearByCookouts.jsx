import {useState} from 'react'
import { useRouter } from 'expo-router'
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import styles from './cookout.style'
import  {COLORS, SIZES}  from '../../../constants';
import useFetch from '../../../hook/useFetch';
import NearByCookoutCard from '../../common/cards/nearby/NearbyCookoutCard';

const NearByCookouts = (url) => {
  const router = useRouter();

  const { data, isLoading, error } = useFetch("http://10.0.2.2:3000/cookouts", "");

  let newData = data
  console.log(data)

  // console.log(newData)

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
          <Text>Something went wrong</Text>
        ) : (
          newData?.map((categ) => (
            <NearByCookoutCard
              job = {categ.coords}
              key  = {categ?.timestamp}
            //   handleNavigate = {() => router.push(`/recipe-by-categories/${categ.strCategory}`)}
            />
          ))
        )}
      </View>
    </View>
  )
}

export default NearByCookouts