import {useState} from 'react'
import { useRouter, useSearchParams } from 'expo-router'
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import styles from './cookout.style'
import  {COLORS, SIZES}  from '../../../constants';
import useFetch from '../../../hook/useFetch';
import NearByCookoutCard from '../../common/cards/nearby/NearbyCookoutCard';

const NearByCookouts = (url) => {
  const router = useRouter();
  const params = useSearchParams();

  const { data, isLoading, error } = useFetch("http://10.0.2.2:3000/cookouts", "");
  // const { data, isLoading, error } = useFetch("http://192.168.117.22:3000/cookouts", "");
  let newData = data
    // console.log("The data we are getting from api", newData?.map((categ) => categ?.timestamp))

    

  return (
    <View style = {styles.container}>
      <View style = {styles.header}>
        <Text style = {styles.headerTitle}>Select a cookout near you</Text>
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
              job = {categ}
              key  = {categ?.timestamp}
            //   handleNavigate = {() => router.push("/Cookouts/cookoutMap")}
            handleNavigate = {() => router.push({pathname: "/Cookouts/cookoutMap", params : categ?.coords })}
            />
           
          ))
        )}
      </View>
    </View>
    
  )
}

export default NearByCookouts