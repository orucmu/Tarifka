import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

const DetailCard = ({detail}) => {
    return(

        <View>
            <Text>{detail.strMeal}</Text>
            <Text>{detail.strArea}</Text>
            <Text>{detail.strInstructions}</Text>
        </View>
    )
}

export default DetailCard;