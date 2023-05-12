import {useState, useEffect} from 'react'
import { useRouter } from 'expo-router'
import { View, Text, TouchableOpacity, ActivityIndicator, Image, Alert} from 'react-native'
import Btn from '../../../app/meal/Btn';
import { darkGreen, green } from '../../../app/meal/Constants';
import styles from './MealIngredient.style'
import  {COLORS, SIZES, FONT}  from '../../../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SQLite from 'expo-sqlite';
// import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard';
import MealByCategCard from '../../common/cards/mealByCateg/MealByCategCard';
import useFetch from '../../../hook/useFetch';
import MealIngredientCard from "../../common/cards/mealIngredient/MealIngredientCard";
const MealIngredient = (url) => {
    const router = useRouter();
    const newUrl = url.url;
    // console.log("this is the url being passed", newUrl)
    const { data, isLoading, error } = useFetch(newUrl, "");
 
    const newData = data.meals
    const ingredients = []
    let instructions = ""
    let urlForImage = ""
    let mealName = "";
    // console.log("Data inside meal ingredients", newData)

    const db = SQLite.openDatabase('example.db');

    useEffect(() => { 
        db.transaction(tx => {
            tx.executeSql('CREATE TABLE IF NOT EXISTS mealsTest (id INTEGER PRIMARY KEY AUTOINCREMENT, mealId INTEGER, mealThumb TEXT, mealName TEXT)')
        });

        db.transaction
    }, []);

    // useEffect(() => { 
    //   console.log('This is the next useEffect')
    //   db.transaction(tx => {
    //     tx.executeSql('INSERT INTO mealsRecent (mealId, mealThumb, mealName ) values (?,?,?)', [newData[0].idMeal, newData[0].strMealThumb, newData[0].strMeal],
    //       (txObj, resultSet) => {
    //         console.log("Data inserted for recent", resultSet)
    //       },
    //       (txObj, error) => console.log(error)
    //     );
    //   });
    // }, []);


    const letsGetTheIngredients = () => {
        
        newData?.map((meals) => {
            instructions = meals?.strInstructions;
            urlForImage = meals?.strMealThumb;
            mealName = meals?.strMeal;
            let flag = true;
            let counter = 1;
         
            while(flag) {   
                if(meals?.[`strIngredient${counter}`] !== "") {  
                    
                    ingredients[counter - 1] = {
                        id : counter,
                        Ingredient : meals?.[`strIngredient${counter}`],
                        Measure : meals?.[`strMeasure${counter}`]
                    }
                    counter++;
                }
                else {
                    flag = false;
                }
            }
            // console.log("Ingredients", ingredients)
    
 
        }
        )
    }

    letsGetTheIngredients();


    saveTheRecipe =() => {

        console.log("Save the recipe")

        db.transaction(tx => {
            tx.executeSql('INSERT INTO mealsTest (mealId, mealThumb, mealName ) values (?,?,?)', [newData[0].idMeal, newData[0].strMealThumb, newData[0].strMeal],
              (txObj, resultSet) => {
                console.log("Data inserted", resultSet)
                Alert.alert(
                    //title
                    'Success',
                    //body
                    'Youre Recipe has been saved to your favorites',
                    [
                      { text: 'Yes', onPress: () => router.push({pathname: '/home' , params : newData[0].idMeal})},
                      // {
                      //   text: 'No',
                      //   onPress: () => console.log('No Pressed'),
                      //   style: 'cancel',
                      // },
                    ],
                    { cancelable: false }
                    //clicking out side of alert will not cancel
                  );
              },
              (txObj, error) => console.log(error)
            );
          });
    }


    return (
        <View style = {styles.container}>

            <Text style = {styles.headerTitle}>{mealName}</Text>
            
            {/* <Image
                source={{uri: urlForImage}}
                // resizeMode='cover'
                style = {{
                    width: "100%",
                    height: "30%",
                    borderRadius: SIZES.xxLarge,
                }}
            /> */}
            
            <View style = {styles.header}>
                <Text style = {styles.headerTitle}>Instructions</Text>
            </View>
            
            <Text>
                {instructions}
            </Text>
        
            <View style = {{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                }}>
                <Text style = {{
                    fontSize: SIZES.large,
                    fontFamily: FONT.medium,
                    color: COLORS.primary,}}>Ingredients
                </Text>
                <Text style = {{
                    fontSize: SIZES.medium,
                    fontFamily: FONT.medium,
                    color: COLORS.gray,}}>{ingredients?.length-1}
                </Text>
            </View>
            <View style = {styles.cardsContainer}>
                {isLoading ? (
                    <ActivityIndicator size="large" color={COLORS.primary} />
                ) : error ?(
                    <Text>Something went wrong</Text>
                ) : (
                    ingredients?.map((meal) => (
                        <MealIngredientCard
                            data = {meal}
                            key  = {meal.id}
                        />
                    ))
                )}

            </View>
            <Btn bgColor={green} textColor='white' btnLabel="Save Recipe" Press={() => {saveTheRecipe()}} />
        </View>
    )
}
export default MealIngredient