import React from "react";
import { View, Text, Image, TouchableWithoutFeedBack } from "react-native";


const CategoriesCard = ({category}) => {
    
    return (
        <TouchableWithoutFeedBack >

            <View style={{flex:1}}>
                <Text >{category.strCategory}</Text>
            </View>
        </TouchableWithoutFeedBack>
        
    )
} 

export default CategoriesCard;