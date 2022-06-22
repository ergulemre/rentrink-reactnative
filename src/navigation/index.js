import React, {useEffect} from 'react'
import MainStack from '@Navigation/MainStack';
import AuthStackScreen from './AuthStack';
import { NavigationContainer } from '@react-navigation/native';
import Constant from '@Constants';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/slices/authSlice';


const {MyDarkTheme, MyLightTheme, BASE_URL} = Constant;

const RootNavigation = () => {

    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <NavigationContainer>
            {
                isLoggedIn ? <MainStack /> : <AuthStackScreen />
            }
        </NavigationContainer>
    )
}

export default RootNavigation;
