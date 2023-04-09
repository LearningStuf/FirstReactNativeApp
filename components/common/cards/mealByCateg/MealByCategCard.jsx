import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './MealByCategCard.style'

const MealByCategCard = ({job, handleNavigate}) => {
  return (
    <TouchableOpacity 
      style = {styles.container}
    >
      <View style = {styles.textContainer}>
        <Text style = {styles.jobName}>
          {job.strMeal}
        </Text>
      </View>
      <TouchableOpacity style = {styles.logoContainer}
        onPress = {handleNavigate}  
      >
        <Image
          source={{uri: job.strMealThumb}}
          // resizeMode='cover'
          style = {styles.logoImage}
        />
      </TouchableOpacity>
      {/* <Text style={styles.companyName} numberOfLines={1}>
          {item.strMeal}
      </Text> */}
 
      {/* <Text style={{position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      top: 0,
      Bottom: 10*0.93,
      right: 0,
      marginLeft: 10*0.18, }}>Btn</Text> */}
    
    </TouchableOpacity>
  )
}

export default MealByCategCard