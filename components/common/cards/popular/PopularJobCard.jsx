import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './popularjobcard.style'

const PopularJobCard = ({item, selectedJob, handleCardPress}) => {

  const RoutePushPress = () => {
    handleCardPress(item)
  }

  return (
    <TouchableOpacity 
      style = {styles.container(selectedJob, item)}
     onPress = {() => RoutePushPress()}
    >
      <TouchableOpacity style = {styles.logoContainer(selectedJob, item)}
      onPress = {() => RoutePushPress()}
      >
        <Image
          source={{uri: item.mealThumb}}
          // resizeMode='cover'
          style = {styles.logoImage}
        />
      </TouchableOpacity>
      {/* <Text style={styles.companyName} numberOfLines={1}>
          {item.strMeal}
      </Text> */}
      <View style = {styles.infoContainer}>
        <Text style = {styles.jobName(selectedJob,item)}>
          {item.mealName}
        </Text>
      </View>
    
    
    </TouchableOpacity>
  )
}

export default PopularJobCard