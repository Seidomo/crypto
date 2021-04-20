import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import Bottom from './components/bottom-nav/Bottom-Nav.js';
import axios from 'axios';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },
};
import Dashboard from './components/dashboard-view/Dashboard.js'



export default function App() {

  useEffect(() => {
    axios.get("https://api.nomics.com/v1/currencies/ticker?key=911389757c5ae75d545c66e2995f4263&ids=BTC,ETH,XRP&interval=1d,30d&convert=EUR&per-page=100&page=1")
      .then(response => console.log(response))
    console.log('yo dawgs')
  }, []);

  return (
    <PaperProvider theme={theme}>
        <Bottom>
        <Dashboard />

        </Bottom>
    </PaperProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
