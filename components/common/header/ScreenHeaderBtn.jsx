import React from 'react'
import { TouchableOpacity, Image , View, Text } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './screenheader.style'

  const ScreenHeaderBtn = ({iconUrl, dimension, handlePress}) => {
  return (
    <TouchableOpacity style = {styles.btnContainer}
    // onPress = { async () => {
    //   await AuthSession.revokeAsync({
    //     token: auth.accessToken
    //   }, {
    //     revocationEndpoint: "https://oauth2.googleapis.com/revoke"
    //   });
  
    //   setAuth(undefined);
    //   setUserInfo(undefined);
      
    //   await AsyncStorage.removeItem("auth");
    //   console.log("logout")
    // }}
    
    >
      <Image
        source = {iconUrl}
        resizeMode="cover"
        style = {styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn