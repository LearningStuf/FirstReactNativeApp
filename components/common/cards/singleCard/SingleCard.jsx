import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './SingleCard.style'

const PopularJobCard = ({item, url, selectedJob, handleCardPress}) => {
  return (
    <TouchableOpacity style = {styles.container()}
      onPress = {() => handleCardPress()}
    >
      <TouchableOpacity style = {styles.logoContainer()}>
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

export default PopularJobCard