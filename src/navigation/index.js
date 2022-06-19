import React, {useEffect} from 'react'
import MainStack from '@Navigation/MainStack';
import AuthStackScreen from './AuthStack';
import { NavigationContainer } from '@react-navigation/native';
import Constant from '@Constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {MyDarkTheme, MyLightTheme, BASE_URL} = Constant;

const RootNavigation = () => {

    const [onboarded, setOnboarded] = React.useState(false)


    const checkOnboarding = async () => {
        try {
            console.log("asdsad")
            const value = await AsyncStorage.getItem('@viewedOnboarding')
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
        <NavigationContainer>
            {onboarded ? <AuthStackScreen/> : <MainStack/>}
        </NavigationContainer>
    )
}

export default RootNavigation;
