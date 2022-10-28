import React from "react";
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import styles from './MealsCard.style'

const MealsCard = ({ meal, onSelect }) => {
    return (
        <TouchableWithoutFeedback onPress={onSelect}  >
            <View style={styles.container} >
                <Image style={styles.image} source={{ uri: meal.strMealThumb }} />
                <Text numberOfLines={1} style={styles.title}>{meal.strMeal} </Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default MealsCard;