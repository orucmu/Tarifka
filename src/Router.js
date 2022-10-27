import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categories from './pages/Categories/Categories';
import Meals from './pages/Meals/Meals';
import Detail from './pages/Detail/Detail';

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='CategoriesPage' component={Categories} options={{ title: 'Categories', headerTitleAlign: 'center', headerStyle: { backgroundColor: 'white' }, headerTitleStyle: { color: '#FF884B' } }} />
        <Stack.Screen name='MealsPage' component={Meals} options={{ title: 'Meals', headerTitleAlign: 'center', headerStyle: { backgroundColor: 'white' }, headerTitleStyle: { color: '#FF884B' }, headerTintColor: '#FF884B' }} />
        <Stack.Screen name='DetailPage' component={Detail} options={{ title: 'Detail', headerTitleAlign: 'center', headerStyle: { backgroundColor: 'white' }, headerTitleStyle: { color: '#FF884B' }, headerTintColor: '#FF884B' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router;