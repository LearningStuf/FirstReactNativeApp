import {useState} from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'

import styles from './cookout.style'
import  {COLORS, SIZES}  from '../../../constants';
// import PopulaJobCard from '../../common/cards/singleCard/SingleCard';
import SingleCard from '../../common/cards/singleCard/SingleCard';
import useFetch from '../../../hook/useFetch';

const Cookout = () => {

  const router = useRouter();
  // const isLoading  = false;
  // const error = false;

  // const {data, isLoading, error} = useFetch()
  const { data, isLoading, error } = useFetch("search", {
    query: "React developer",
    num_pages: "1",
  });

  var urlImage = "https://images.unsplash.com/photo-1524222717473-730000096953?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"

  // console.log(data)


  return (
    <View style = {styles.container}>
      <View style = {styles.header}>
        <Text style = {styles.headerTitle}>Have A Cookout</Text>
        {/* <TouchableOpacity>
          <Text style = {styles.headerBtn}>Show all</Text>
        </TouchableOpacity> */}
      </View>
      <View style = {styles.cardsContainer}>
              <SingleCard 
                url = {urlImage}
              />     
      </View>
    </View>
  )
}

export default Cookout