import React, {useEffect} from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/Login';
import RegisterScreen from '../screens/Register';
import Onboarding from '../screens/Onboarding/Onboarding';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthStack = createStackNavigator();
const AuthStackScreen = () => {
  
  const [onboarded, setOnboarded] = React.useState(true)

  const checkOnboarding = async () => {
    try {
        const value = await AsyncStorage.getItem('@viewedOnboarding')
        if (value == 'false') {
            console.log("evet girdim");
            setOnboarded(false)
        }
    } catch (err) {
        console.log(err)
    } finally {
    }
  }
  useEffect(() => {
      checkOnboarding()
  }, [])

  return (
    <AuthStack.Navigator screenOptions={{ 
      headerShown: false, 
      }}>
        {onboarded && <AuthStack.Screen name="Onboarding" component={Onboarding} />}
        <AuthStack.Screen name="Login" component={LoginScreen} />
        <AuthStack.Screen name="Register" component={RegisterScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthStackScreen;