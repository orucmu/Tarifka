import React from "react";
import {FlatList, View, Text } from "react-native";
import Config from "react-native-config";
import useFetch from '../../hooks/useFetch/useFetch';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import  {API_CATEGORY}  from '../../APIs'
import CategoriesCard from "../../components/CategoriesCard/CategoriesCard";




const Categories = ({navigation}) => {
    const {error, loading, data} = useFetch(`${API_CATEGORY}`);

    
    
    const renderProduct = ({item}) => <CategoriesCard category={item}/>
    
    return(
        <View>

        <FlatList data={data.categories} renderItem={renderProduct} />
        </View>
    )
}

export default Categories;