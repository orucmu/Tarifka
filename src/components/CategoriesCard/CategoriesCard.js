import React from "react";
import { View, Text, Image, TouchableWithoutFeedBack } from "react-native";
import styles from './CategoriesCard.style';

const CategoriesCard = ({ category, onSelect }) => {
    return (
        <TouchableWithoutFeedBack onPress={onSelect}>
            <View style={styles.container}>
                <Image style={styles.image} />
                <Text style={styles.title}>Category</Text>
            </View>
        </TouchableWithoutFeedBack>
    )
} 