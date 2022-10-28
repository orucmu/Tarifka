import React from "react";
import { View, Text, Image, TouchableWithoutFeedback, SafeAreaView } from 'react-native';
import styles from './CategoriesCard.style';

const CategoriesCard = ({ category, onSelect }) => {
    return (
        <SafeAreaView style={styles.container}>

            <TouchableWithoutFeedback  onPress={onSelect} >
                <View style={styles.card_container}>
                    <View>
                        <Image style={styles.image} source={{ uri: category.strCategoryThumb }} />
                    </View>
                    <Text style={styles.title}>{category.strCategory}</Text>
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    )
}

export default CategoriesCard;