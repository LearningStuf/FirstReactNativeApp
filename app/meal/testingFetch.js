import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
// import fetchCookouts from '../../hook/fetchCookouts'
import useFetch from '../../hook/useFetch'

const testingFetch = () => {

//   const { data, isLoading, error } = useFetch("http://localhost:3000/", "");
    // const { data, isLoading, error } = useFetch("http://localhost:3000/cookouts", "");

    // console.log("This is the data", data)


    
    const getData = async () => {
      try {
        
        const jsonValue = await AsyncStorage.getItem('Testing1')
        console.log("this is the value insdied Async" , jsonValue)
        let value =  jsonValue != null ? JSON.parse(jsonValue) : null;
        
        console.log(value)

        return value;
        // if(jsonValue !== null) {
        //   setnewData(JSON.parse(jsonValue) )
        // }

      } catch(e) {
        console.log("This is the error", e)
      }
  }

  // const storeData = async (value) => {
  //   try {  
        
  //   //   const jsonValue = JSON.stringify(value)
  //   const jsonValue = JSON.stringify(value)
  //     console.log("This is the value", jsonValue)
  //     await AsyncStorage.setItem('Testing1', jsonValue)
  //   } catch (e) {
  //     // saving error
  //   }
  // }
  // let data = {
  //   "id": 1,
  //   "name": "Chicken",
  //   "image": "https://www.themealdb.com/images/media/meals/58oia61564916529.jpg",
  // }

  // console.log("data initialized" , data)

  // storeData(data);


  // const getData = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem('Testing1')
  //     // console.log("This is the value of the user", value);
  //     if(value !== null) {
  //       setUser(value)
  //     }
  //   } catch(e) {
  //     // error reading value
  //   }
  // }
  
    let recentRecipe =  getData();


    console.log("This is what I am getting", recentRecipe)


  return (

    <View>
      <Text>Hello</Text>
    </View>
  )
}

export default testingFetch

const styles = StyleSheet.create({})