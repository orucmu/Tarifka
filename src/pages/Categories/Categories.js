import React from "react";
import { FlatList, View } from "react-native";
import useFetch from '../../hooks/useFetch/useFetch';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import CategoriesCard from '../../components/CategoriesCard/CategoriesCard'
import Config from "react-native-config";

const Categories = (props) => {
    const {error, loading, data} = useFetch(Config.API_URL);
    
    const renderProduct = ({item}) => <CategoriesCard category={item}/>
    
    return(
        <View style={{flex:1}}>

        <FlatList  data={data.categories} renderItem={renderProduct} />
        </View>
    )
}

export default Categories;