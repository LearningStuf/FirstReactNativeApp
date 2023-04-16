import {useState, useEffect} from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator, Alert} from 'react-native'
import { useRouter } from 'expo-router'
import * as Location from 'expo-location';
import styles from './cookout.style'
import SingleCard from '../../common/cards/singleCard/SingleCard';
import axios from 'axios';



const JoinCookout = (img) => {

    
  const router = useRouter();
  // const isLoading  = false;
  // const error = false;

  // const {data, isLoading, error} = useFetch()
  // const { data, isLoading, error } = useFetch("search", {
  //   query: "React developer",
  //   num_pages: "1",
  // });

  const urlImage = img.img
  const Title = img.localTitle
  const RoutToPush = img.routToPush


  

  const handleNavigate = () => {
   
      if (RoutToPush) {
        router.push(RoutToPush)
        }
    
  }

  // console.log(data)
  // console.log ("This is search ingredient")
  // console.log (Title)
  // console.log (urlImage)

  return (
    <View style = {styles.container}>
      <View style = {styles.header}>
        <Text style = {styles.headerTitle}>{Title}</Text>
        {/* <TouchableOpacity>
          <Text style = {styles.headerBtn}>Show all</Text>
        </TouchableOpacity> */}
      </View>
      <View style = {styles.cardsContainer}>

        <SingleCard 
          url = {urlImage}
          handleNavigate = {handleNavigate}
        />

      </View>
    </View>
  )
}

export default JoinCookout