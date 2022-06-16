import React from 'react';
import {View, StyleSheet} from 'react-native';
import RootNavigation from '@Navigation';


const App = () => {
  return (
    <View style={styles.root}>
      <RootNavigation/>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  }
});

export default App;

