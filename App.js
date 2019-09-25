import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {init} from '@rematch/core';
import {Provider} from 'react-redux';
import {app} from './models/appModel';

//Generation du Redux Store
const store = init({
  models: {app},
});

export default function App() {
  return (
  <Provider store={store}>
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
