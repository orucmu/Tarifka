import React from "react";
import { FlatList, View, Text } from "react-native";
import useFetch from "../../hooks/useFetch/useFetch";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import { API_MEALS } from "../../APIs";
import MealsCard from '../../components/MealsCard/MealsCard'

const Meals = ({navigation, route}) => {
    const {strCategory} = route.params;
    const {error, loading, data} = useFetch(API_MEALS+strCategory)

    const renderMeals =({item}) => <Text>{item.strMeal}</Text>



    return (
        <FlatList data={data.meals} renderItem={renderMeals} />
    )
}

export default Meals;