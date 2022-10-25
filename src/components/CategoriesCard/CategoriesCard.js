import React from "react";
import { View, Text, Image, TouchableWithoutFeedBack } from "react-native";
import styles from './CategoriesCard.style';


const CategoriesCard = ({category}) => {
    
    return (
        
            <View style={{flex:1}} >
               
                <Text >{category.strCategory}</Text>
            </View>
        
    )
} 

export default CategoriesCard;