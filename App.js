import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Dashboard from './src/components/dashboard-view/Dashboard.js'
import axios from 'axios';
import { Provider } from 'react-redux';
import store from './src/store/index.js';

export default function App() {

      
  // useEffect(() => {
  //   axios.get("https://api.nomics.com/v1/currencies/ticker?key=911389757c5ae75d545c66e2995f4263&ids=BTC,ETH,XRP&interval=1d,30d&convert=EUR&per-page=100&page=1")
  //   .then(response => console.log(response))
  //   console.log('yo dawgs')
  // }, []);


  return (
    <View style={styles.container}>
      <Provider store={store()}>
        <Dashboard />
      </Provider>
    </View>
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
