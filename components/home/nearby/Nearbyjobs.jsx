import {useState} from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'

import styles from './nearbyjobs.style'
import  {COLORS, SIZES}  from '../../../constants';
// import PopulaJobCard from '../../common/cards/singleCard/SingleCard';
import SingleCard from '../../common/cards/singleCard/SingleCard';
import useFetch from '../../../hook/useFetch';

const Nearbyjobs = () => {

  const router = useRouter();
  // const isLoading  = false;
  // const error = false;

  // const {data, isLoading, error} = useFetch()
  const { data, isLoading, error } = useFetch("search", {
    query: "React developer",
    num_pages: "1",
  });

  var urlImage = "https://images.unsplash.com/photo-1543353071-10c8ba85a904?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"

  console.log(data)


  return (
    <View style = {styles.container}>
      <View style = {styles.header}>
        <Text style = {styles.headerTitle}>Search By Category</Text>
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
          // <FlatList
          //   data = {data}
          //   renderItem={({item}) => (
          //     <PopulaJobCard 
          //       item = {item}
          //     />
          //   )}
          //   keyExtractor = {item => item?.idMeal}
          //   contentContainerStyle = {{columnGap: SIZES.medium}}
          //   horizontal
          // />

              <SingleCard 
                url = {urlImage}
              />
        )}
      </View>
    </View>
  )
}

export default Nearbyjobs