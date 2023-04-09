import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './MealIngredientCard.style'
import {COLORS, FONT, SIZES} from "../../../../constants";

const MealIngredientCard = ({data, handleNavigate}) => {
    return (

        <View style = {{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
        }}>

            <Text style = {{
                fontSize: SIZES.large,
                fontFamily: FONT.medium,
                color: COLORS.primary,}}>{data.Ingredient}
            </Text>
            <Text style = {{
                fontSize: SIZES.medium,
                fontFamily: FONT.medium,
                color: COLORS.gray,}}>{data.Measure}
            </Text>


        </View>

    )
}

export default MealIngredientCard