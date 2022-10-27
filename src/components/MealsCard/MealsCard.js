import React from "react";
import {View,Text, Image, TouchableWithoutFeedback } from 'react-native';
import styles from './MealsCard.style'

const MealsCard = ({meal, onSelect}) => {
    return (
        <TouchableWithoutFeedback onPress={onSelect}>
            <View>

            <Image style={styles.image} source={{uri: meal.strMealThumb}}/>
            <Text>{meal.strMeal}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default MealsCard;