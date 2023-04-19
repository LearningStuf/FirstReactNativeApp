import {useState} from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'

import styles from './recommend.style'
import  {COLORS, SIZES}  from '../../../constants';
// import PopulaJobCard from '../../common/cards/singleCard/SingleCard';
import SingleCard from '../../common/cards/singleCard/SingleCard';
import useFetch from '../../../hook/useFetch';

const Recommend = () => {

  const router = useRouter();
  // const isLoading  = false;
  // const error = false;

  // const {data, isLoading, error} = useFetch()
  const { data, isLoading, error } = useFetch("search", {
    query: "React developer",
    num_pages: "1",
  });

  var urlImage = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"

  // console.log(data)


  return (
    <View style = {styles.container}>
      <View style = {styles.header}>
        <Text style = {styles.headerTitle}>Let Us Recommend</Text>
        {/* <TouchableOpacity>
          <Text style = {styles.headerBtn}>Show all</Text>
        </TouchableOpacity> */}
      </View>
      <View style = {styles.cardsContainer}>
              <SingleCard 
                url = {urlImage}
                // handleNavigate = {() => router.push(`/meal/random`)}
                handleNavigate = {() => router.push(`/meal/testingLogin`)}
              />
      </View>
    </View>
  )
}

export default Recommend