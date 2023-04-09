
import { useState } from "react";
import {View, ScrollView, SafeAreaView, Text} from "react-native";
import {Stack, useRouter, useSearchParams} from "expo-router";

import {COLORS, FONT, icons, images, SIZES} from "../../constants";
import {Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome, RecentRecipe, SearchIngredient, Recommend, Cookout} from "../../components";
import styles from "../../components/home/popular/popularjobs.style";
import MealIngredient from "../../components/home/mealIngredient/MealIngredient";

const Random = () => {
    const router = useRouter();
    // const params = useSearchParams();

    
    const urlToPass = `https://www.themealdb.com/api/json/v1/1/random.php`;

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

                    
                    <MealIngredient
                            url = {urlToPass}
                    />


                </View>
            </ScrollView>

        </SafeAreaView>
    );
}

export default Random;