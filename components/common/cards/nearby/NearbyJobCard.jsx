import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './nearbyjobcard.style'

const NearbyJobCard = ({job, handleNavigate}) => {
  return (
    <TouchableOpacity 
      style = {styles.container}
    >
      <View style = {styles.textContainer}>
        <Text style = {styles.jobName}>
          {job.strCategory}
        </Text>
      </View>
      <TouchableOpacity style = {styles.logoContainer}
        onPress = {handleNavigate}  
      >
        <Image
          source={{uri: job.strCategoryThumb}}
          // resizeMode='cover'
          style = {styles.logoImage}
        />
      </TouchableOpacity>
      {/* <Text style={styles.companyName} numberOfLines={1}>
          {item.strMeal}
      </Text> */}
 
    
    
    </TouchableOpacity>
  )
}

export default NearbyJobCard