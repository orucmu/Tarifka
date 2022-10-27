import React from "react";
import {FlatList, View } from "react-native";
import Config from "react-native-config";
import useFetch from '../../hooks/useFetch/useFetch';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import  {API_CATEGORY}  from '../../APIs'
import CategoriesCard from "../../components/CategoriesCard/CategoriesCard";




const Categories = ({navigation}) => {
    const {error, loading, data} = useFetch(`${API_CATEGORY}`);

    const handleCategorySelect = (strCategory) => {
        navigation.navigate('MealsPage', {strCategory})
    }

    if (loading) {
        return <Loading/>
    }

    if (error) {
        return <Error/>
    }
    
    const renderProduct = ({item}) => <CategoriesCard category={item} onSelect={() => handleCategorySelect(item.strCategory)}/>
    
    return(
        <View>

        <FlatList data={data.categories} renderItem={renderProduct} />
        </View>
    )
}

export default Categories;