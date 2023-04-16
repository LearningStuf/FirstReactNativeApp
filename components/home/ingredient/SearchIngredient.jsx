import {useState} from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator, Alert} from 'react-native'
import { useRouter } from 'expo-router'

import styles from './searchIngredient.style'
import  {COLORS, SIZES}  from '../../../constants';
// import PopulaJobCard from '../../common/cards/singleCard/SingleCard';
import SingleCard from '../../common/cards/singleCard/SingleCard';
import useFetch from '../../../hook/useFetch';

const SearchIngredient = (img) => {

  
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

export default SearchIngredient