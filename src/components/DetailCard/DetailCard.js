import React from "react";
import { View, Text, Image, Button, Linking } from "react-native";
import styles from './DetailCard.style'

const DetailCard = ({ detail }) => {
    return (

        <View>
            <Image style={styles.image} source={{ uri: detail.strMealThumb }} />
            <Text>{detail.strMeal}</Text>
            <Text>{detail.strArea}</Text>
            <Text>{detail.strInstructions}</Text>
            <Button title="Watch on YouTube" onPress={() => { Linking.openURL(detail.strYoutube) }} />
        </View>
    )
}

export default DetailCard;