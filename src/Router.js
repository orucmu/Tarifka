import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Categories from './pages/Categories/Categories';
import Meals from './pages/Meals/Meals';
import Detail from './pages/Detail/Detail';

const Stack = createNativeStackNavigator();

function Router(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='CategoriesPage' component={Categories} />
        <Stack.Screen name='MealsPage' component={Meals} />
        <Stack.Screen name='DetailPage' component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router;