import React, { useState, useEffect } from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import Tabs from './Tabs';
import NewsDetails from '@Screen/NewsDetails';
import CategoryList from '@Screen/CategoryList';
import About from '@Screen/About';
import LoginScreen from '../screens/Login';
import RegisterScreen from '../screens/Register';
import { useSelector, useDispatch, } from 'react-redux';
import Onboarding from '../screens/Onboarding/Onboarding';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthStack = createStackNavigator();
const AuthStackScreen = () => {
  
  return (
    <AuthStack.Navigator screenOptions={{ 
      headerShown: false, 
      }}>
        <AuthStack.Screen name="Login" component={LoginScreen} />
        <AuthStack.Screen name="Register" component={RegisterScreen} />
    </AuthStack.Navigator>
  );
};

const MainStack = () => {
    const Stack = createStackNavigator();

    const onboarding = useSelector((state) => state.onboarding.value);
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
    const [onboarded, setOnboarded] = React.useState(false)


    const checkOnboarding = async () => {
        try {
            console.log("asdsad")
            const value = await AsyncStorage.getItem('@viewedOnboarding')
            console.log("------------------")
            console.log("CHECK ONBOARDİNG")
            console.log(value)
            console.log(onboarded)
            console.log("------------")
            if (value == 'true') {
                console.log("evet girdim");
                setOnboarded(true)
            }
        } catch (err) {
            console.log(err)
        } finally {
        }
    }
    useEffect(() => {
        console.log(onboarded)
        console.log("useeffect içi")
        checkOnboarding()
    }, [])

    return (
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={
            onboarded == true ? 'Onboarding' : 'AuthStackScreen'
        }>
            <Stack.Screen name="Onboarding" component={Onboarding} />
            <Stack.Screen name="Tab" component={Tabs} />
            <Stack.Screen name="AuthStackScreen" component={AuthStackScreen} />
            <Stack.Screen name="NewsDetails" component={NewsDetails} />
            <Stack.Screen name="CategoryList" component={CategoryList} />
            <Stack.Screen name="About" component={About} />

        </Stack.Navigator>
    )
}
export default MainStack;