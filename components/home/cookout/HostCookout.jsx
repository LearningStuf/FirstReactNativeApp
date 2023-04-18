import {useState, useEffect} from 'react'
import * as Location from 'expo-location';
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator, Alert} from 'react-native'
import { useRouter } from 'expo-router'
import styles from './cookout.style'
import SingleCard from '../../common/cards/singleCard/SingleCard';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';




const HostCookout = (img) => {
  
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [user, setUser] = useState(null);
  let body;
  
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

    })();
  }, []);


  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('UserName')
      // console.log("This is the value of the user", value);
      if(value !== null) {
        setUser(value)
      }
    } catch(e) {
      // error reading value
    }
  }

  getData();

 

    let text = 'Waiting..';
    if (errorMsg) {
      text = errorMsg;
    } else if (location) {
      text = JSON.stringify(location); 
    }


  
  const router = useRouter();
  // const isLoading  = false;
  // const error = false;

  // const {data, isLoading, error} = useFetch()
  // const { data, isLoading, error } = useFetch("search", {
  //   query: "React developer",
  //   num_pages: "1",
  // });

  const urlImage = img.img
  const Title = img.localTitle
  const RoutToPush = img.routToPush


  

  const handleNavigate = async (e) => {
    e.preventDefault();
    try{

      console.log("This is the location in the try block", location)
      if (location) {
          body = {...location, 
          user}
      }
      else
      {
        await timeout(1000);
        body = {...location, 
          user}

      }
      // const resp = await axios.post("http://10.0.2.2:3000/create",body)
      const resp = await axios.post("http://192.168.117.22:3000/create",body)
      console.log("This is the location data being sent to the cloud", body)
      // console.log("This is the response of the firebase server", resp.data)
    }
    catch (error) {
      console.log(error)
    }
    finally {
      if (RoutToPush) {
        router.push(RoutToPush)
        }
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