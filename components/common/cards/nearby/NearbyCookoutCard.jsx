import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './nearbyjobcard.style'

const NearbyCookoutCard = ({job, handleNavigate}) => {
  return (
    <TouchableOpacity 
      style = {styles.container}
    >
      <View style = {styles.textContainer}>
        <Text style = {styles.jobName}>
          {job.latitude}
        </Text>
      </View>
      <TouchableOpacity style = {styles.logoContainer}
        onPress = {handleNavigate}  
      >
        <Image
          source={{uri: "https://images.unsplash.com/photo-1534644107580-3a4dbd494a95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}}
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

export default NearbyCookoutCard