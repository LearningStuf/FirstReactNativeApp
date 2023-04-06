import React from 'react'
import { useRouter } from "expo-router"
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './SingleCard.style'

const SingleCard = ({url,handleNavigate}) => {

  // console.log("This is the card")
  // console.log(url)
  const router = useRouter();
  return (
    <TouchableOpacity style = {styles.container()} >
      <TouchableOpacity style = {styles.logoContainer()}
        onPress = {handleNavigate}
      >
        <Image
          source={{uri: url}}
          // resizeMode='cover'
          style = {styles.logoImage}
        />
      </TouchableOpacity>
      {/* <Text style={styles.companyName} numberOfLines={1}>
          {item.strMeal}
      </Text> */}
      <View style = {styles.infoContainer}>
        <Text style = {styles.jobName()}>
          {}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default SingleCard