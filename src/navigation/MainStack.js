import React, { useState, useEffect } from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import Tabs from './Tabs';
import SplashScreen from '@Screen/SplashScreen';
import NewsDetails from '@Screen/NewsDetails';
import CategoryList from '@Screen/CategoryList';
import About from '@Screen/About';
import LoadingScreen from '../screens/Loading';
import LoginScreen from '../screens/Login';
import RegisterScreen from '../screens/Register';
import { useSelector, useDispatch, } from 'react-redux';
import Onboarding from '../screens/Onboarding/Onboarding';

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
            const value = await AsyncStorage.getItem('@viewedOnboarding')
            console.log(value)
            console.log(onboarded)
            if (value == 'true') {
                console.log("evet girdim");
                setOnboarded(true)
            }
        } catch (err) {
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
            onboarded === true ? 'AuthStackScreen' : 'Onboarding'
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