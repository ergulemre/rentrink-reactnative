import React, {useEffect} from 'react'
import { View, Text } from 'react-native'
import MainStack from '@Navigation/MainStack';
import { NavigationContainer } from '@react-navigation/native';
import Constant from '@Constants';
import axios from 'axios';

const {MyDarkTheme, MyLightTheme, BASE_URL} = Constant;

const RootNavigation = () => {

    return (
        <NavigationContainer>
            <MainStack/>
        </NavigationContainer>
    )
}

export default RootNavigation;
