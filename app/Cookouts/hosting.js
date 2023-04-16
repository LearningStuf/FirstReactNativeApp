
import { useState, useEffect } from "react";
import {View, ScrollView, SafeAreaView, Text} from "react-native";
import {Stack, useRouter, useSearchParams} from "expo-router";
import * as Location from 'expo-location';
import {COLORS, FONT, icons, images, SIZES} from "../../constants";
import {Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome, RecentRecipe, SearchIngredient, Recommend, Cookout} from "../../components";
import fetchCookouts from "../../hook/fetchCookouts";

const hosting = () => {

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
  
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
    // const { data, isLoading, error } = fetchCookouts("http://localhost:3000/", location);
  


    return (
    
        <SafeAreaView style ={{flex: 1, backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen
                options={{
                    headerStyle: {backgroundColor: COLORS.lightWhite},
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl = {icons.menu} dimension = "60%"/>
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl = {images.profile} dimension = "100%"/>
                    ),
                    headerTitle : ""
                }}
            />

            <ScrollView showsVerticalScrollIndicator = {true}>
                <View
                    style = {{
                        flex: 1,
                        padding: SIZES.medium
                    }}
                >
                  <SearchIngredient
                    img= {"https://images.unsplash.com/photo-1543353071-10c8ba85a904?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}
                    localTitle = {"Your cookout has successfully been created!"}
                    // routToPush = {"/Category/categories"}
                  />
          

                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

export default hosting

