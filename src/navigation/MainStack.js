import React, { useState, useEffect } from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import Tabs from './Tabs';
import NewsDetails from '@Screen/NewsDetails';
import CategoryList from '@Screen/CategoryList';
import About from '@Screen/About';
import AuthStackScreen from './AuthStack';
import Home from '../screens/Home';

const MainStack = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Tab" component={Tabs} />
            <Stack.Screen name="AuthStackScreen" component={AuthStackScreen} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="NewsDetails" component={NewsDetails} />
            <Stack.Screen name="CategoryList" component={CategoryList} />
            <Stack.Screen name="About" component={About} />
        </Stack.Navigator>
    )
}
export default MainStack;