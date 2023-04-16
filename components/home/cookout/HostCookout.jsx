import {useState, useEffect} from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator, Alert} from 'react-native'
import { useRouter } from 'expo-router'
import * as Location from 'expo-location';
import styles from './cookout.style'
import SingleCard from '../../common/cards/singleCard/SingleCard';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';




const HostCookout = (img) => {
  
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [user, setUser] = useState(null);


  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('UserName')
      console.log("This is the value of the user", value);
      if(value !== null) {
        setUser(value)
      }
    } catch(e) {
      // error reading value
    }
  }

  getData();

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

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
      let body = {...location, 
        user}
      const resp = await axios.post("http://10.0.2.2:3000/create",body)
      console.log("This is the location data retreived", body)
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