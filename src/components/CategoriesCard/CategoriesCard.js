import React from "react";
import {View,Text} from 'react-native';

const CategoriesCard = ({category}) => {
    return (
        <View>
            <Text>{category.strCategory}</Text>
        </View>
    )
}

export default CategoriesCard;