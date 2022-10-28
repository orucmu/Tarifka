import React from "react";
import { View, Text, Image, Button, Linking, TouchableWithoutFeedback } from "react-native";
import styles from './DetailCard.style'

const DetailCard = ({ detail }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: detail.strMealThumb }} />
            <View style={styles.title_container}>
                <Text style={styles.title}>{detail.strMeal}</Text>
                <Text style={styles.area}>{detail.strArea}</Text>
            </View>
            <Text style={styles.border}></Text>
            <Text style={styles.instruction}>{detail.strInstructions}</Text>
            <TouchableWithoutFeedback  onPress={() => { Linking.openURL(detail.strYoutube) }} >
                <View style={styles.button}>
                <Text style={styles.button_title}>Watch on Youtube</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}

export default DetailCard;