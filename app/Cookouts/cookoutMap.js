import { StyleSheet, Text, View } from 'react-native'
import { useNavigation, useRouter, useSearchParams } from "expo-router";

import React from 'react'

const cookoutMap = () => {
    const params = useSearchParams();
    console.log("This is the databeing forwarded", params)
  return (
    <View>
      <Text>cookoutMap</Text>
    </View>
  )
}

export default cookoutMap

const styles = StyleSheet.create({})