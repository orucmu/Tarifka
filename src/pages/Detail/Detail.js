import React from "react";
import { View, FlatList, Text, ScrollView  } from "react-native";
import Config from "react-native-config";
import useFetch from "../../hooks/useFetch/useFetch";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import { API_RECIPE } from "../../APIs";
import DetailCard from "../../components/DetailCard/DetailCard";


const Detail = ({route}) => {
    const {idMeal} = route.params;
    const {loading, error, data} = useFetch(API_RECIPE+idMeal)

    const renderDetail = ({item}) => <DetailCard detail={item} />

    return (

       <FlatList data={data.meals} renderItem={renderDetail} />
    )
}

export default Detail;