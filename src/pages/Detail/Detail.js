import React from "react";
import { FlatList } from "react-native";
import useFetch from "../../hooks/useFetch/useFetch";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import { API_RECIPE } from "../../APIs";
import DetailCard from "../../components/DetailCard/DetailCard";

const Detail = ({ route }) => {
    const { idMeal } = route.params;
    const { loading, error, data } = useFetch(API_RECIPE + idMeal)

    if (loading) {
        return <Loading />
    }
    if (error) {
        return <Error />
    }

    const renderDetail = ({ item }) => <DetailCard detail={item} />

    return (
        <FlatList data={data.meals} renderItem={renderDetail} style={{ backgroundColor: 'white' }} />
    )
}

export default Detail;

