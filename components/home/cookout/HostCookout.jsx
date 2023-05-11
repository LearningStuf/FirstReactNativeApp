import {useState, useEffect} from 'react'
import * as Location from 'expo-location';
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator, Alert} from 'react-native'
import { useRouter } from 'expo-router'
import styles from './cookout.style'
import SingleCard from '../../common/cards/singleCard/SingleCard';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';




const HostCookout = (img) => {
  
  const [userInfo, setUserInfo] = useState([]);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  // const [user, setUser] = useState(null);
  const [auth, setAuth] = useState([]);
  let body;
  let text = 'Waiting..';
  
  useEffect(() => {
    (async () => {
      // console.log ("I am insde the block that checks for location")
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      // console.log("This is the location", location)

      getAuthToken();

      


    })();
  }, []);

  

  
  const getAuthToken = async () => {
    const jsonValue  = await AsyncStorage.getItem("auth");
    let jsonParse = JSON.parse(jsonValue);
    // setAuth(jsonParse);
    // console.log("This is json parse data ", jsonParse)

    getUserData(jsonParse);
  }

  

  const getUserData  = async (jsonParse) => {
    if (jsonParse.accessToken){
      try {

        console.log("This is the hedaer request", `Bearer ${jsonParse.accessToken}` )

      // console.log("This is the auth data insied the getUserData function", jsonParse)
      let userInfoResponse = await fetch("https://www.googleapis.com/userinfo/v2/me", {
        headers: { Authorization: `Bearer ${jsonParse.accessToken}` }
      });

      

      userInfoResponse.json().then(data => {
        // console.log(data);
        setUserInfo(data);
      });

    }
    catch (error) {
      console.log("This is the error: ", error)
    }
  }
 
  

  };

  
  
  console.log ("This is the user info", userInfo)
  console.log ("This is the auth data", auth)


  // 
  
  // getUserData();
  
  let user = userInfo.name

  console.log('')
 

  //   let text = 'Waiting..';
  //   if (errorMsg) {
  //     text = errorMsg;
  //   } else if (location) {
  //     text = JSON.stringify(location); 
  //   } This is theworking code for location


  
  const router = useRouter();
  

  const urlImage = img.img
  const Title = img.localTitle
  const RoutToPush = img.routToPush


  

  const handleNavigate = async (e) => {
    e.preventDefault();
    try{
      console.log("This is the location in the try block", location)
      body = {...location, 
      user}
      const resp = await axios.post("http://10.0.2.2:3000/create",body)
      // const resp = await axios.post("http://192.168.117.22:3000/create",body)
      console.log("This is the location data being sent to the cloud", resp)
      // console.log("This is the response of the firebase server", resp.data)
    }
    catch (error) {
      console.log(error)
    }
    finally {
      // if (RoutToPush) {
      //   router.push(RoutToPush)
      //   }

      console.log("This is the response of the firebase server", body)

    }

      
  
  }

  // console.log(data)
  // console.log ("This is search ingredient")
  // console.log (Title)
  // console.log (urlImage)

  return (
    <View style = {styles.container}>
      <View style = {styles.header}>
        <Text style = {styles.headerTitle}>{Title}</Text>
        {/* <TouchableOpacity>
          <Text style = {styles.headerBtn}>Show all</Text>
        </TouchableOpacity> */}
      </View>
      <View style = {styles.cardsContainer}>

        <SingleCard 
          url = {urlImage}
          handleNavigate = {handleNavigate}
        />

      </View>
    </View>
  )
}

export default HostCookout