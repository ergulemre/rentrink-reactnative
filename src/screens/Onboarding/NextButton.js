import { StyleSheet, View,Text, TouchableOpacity, Animated } from 'react-native'
import React, {useRef, useEffect } from 'react'
import Svg, {G, Circle} from 'react-native-svg';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default NextButton = ({percentage, scrollTo}) => {

    const size = 128 ;
    const strokeWidth = 2 ;
    const center = size / 2 ;
    const radius = size / 2 - strokeWidth / 2 ;
    const circumference = 2 * Math.PI * radius ;

    const progressAnimation = useRef(new Animated.Value(0)).current;
    const progressRef = useRef(null);

    const animation = (toValue) => {
        return Animated.timing(progressAnimation , {
            toValue ,
            duration : 250,
            useNativeDriver: false
        }).start();
    };

    useEffect(() => {
        animation(percentage) ;
    }, [percentage]);


    useEffect(() => {
        progressAnimation.addListener((value) => {
            const strokeDashoffset = circumference - (circumference * value.value ) / 100;
            if(progressRef?.current ) {
                progressRef.current.setNativeProps({
                    strokeDashoffset
                });
            }
        }, [percentage]);
    });
 
  return (
    <View style={styles.container}>
        <Svg width = { size } height = { size } >
            <G rotation="-90" origin={center}>
                <Circle stroke = "#E6E7E8" cx = {center} cy = {center} r = {radius} strokeWidth = {strokeWidth}/>
                <Circle
                    ref={progressRef}
                    stroke = "#F4338F"
                    cx = {center}
                    cy = {center}
                    r = {radius}
                    strokeWidth = {strokeWidth}
                    strokeDasharray = {circumference}
                />
            </G>
        </Svg>
        <TouchableOpacity onPress={scrollTo} style = {styles.button} activeOpacity = {0.6} >
        <MaterialIcons
              name="arrow-forward"
              size={20}
              color="#666"
              style={{}}
            />
        </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
    container : {
        flex : 1 ,
        justifyContent : 'center' ,
        alignItems : 'center' ,
    },
    button: {
        position : 'absolute' ,
        backgroundColor : "#f4338f",
        borderRadius : 100 ,
        padding : 20 
    }
})