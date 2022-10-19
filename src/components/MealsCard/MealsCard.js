import React from "react";
import { View, Text, Image, TouchableWithoutFeedBack } from 'react-native';
import styles from './MealsCard.style';

const Meals = ({ meal, onSelect }) => {
    return (
        <TouchableWithoutFeedBack onPress={onSelect}>
            <View style={styles.container}>
                <Image style={styles.image}></Image>
                <Text style={styles.title}>Meal</Text>
            </View>
        </TouchableWithoutFeedBack>
    )
}