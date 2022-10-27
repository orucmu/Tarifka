import React from "react";
import {View,Text, Image, TouchableWithoutFeedback } from 'react-native';
import styles from './CategoriesCard.style';
import CategoriesCardStyle from "./CategoriesCard.style";

const CategoriesCard = ({category, onSelect}) => {
    return (
        <TouchableWithoutFeedback onPress={onSelect}>
            <View>

            <View>
                <Image style={styles.image} source={{uri: category.strCategoryThumb}} />
            </View>
            <Text>{category.strCategory}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default CategoriesCard;