import React from 'react';
import {View, StyleSheet} from 'react-native';
import RootNavigation from '@Navigation';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <RootNavigation/>
      </Provider>
    </>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  }
});

export default App;

