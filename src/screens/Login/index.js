import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
  SafeAreaView
} from "react-native";

import LoginSVG from '../assets/images/misc/login.svg';


function LoginScreen() {
  return (
    <>
      <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
        <View style={{alignItems: 'center'}}>
            <LoginSVG
              height={300}
              width={300}
              style={{transform: [{rotate: '-5deg'}]}}
            />
        </View>
      </SafeAreaView>
    </>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {},
})