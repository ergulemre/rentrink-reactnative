import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/Login';
import RegisterScreen from '../screens/Register';

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

export default AuthStackScreen;