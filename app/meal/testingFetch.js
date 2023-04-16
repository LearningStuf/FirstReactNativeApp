import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import fetchCookouts from '../../hook/fetchCookouts'
import useFetch from '../../hook/useFetch'

const testingFetch = () => {

//   const { data, isLoading, error } = useFetch("http://localhost:3000/", "");
    const { data, isLoading, error } = useFetch("http://localhost:3000/cookouts", "");

    console.log("This is the data", data)


  return (

    <View>
      <Text>Hello</Text>
    </View>
  )
}

export default testingFetch

const styles = StyleSheet.create({})