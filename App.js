import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Dashboard from './src/components/dashboard-view/Dashboard.js'
import * as React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import Bottom from './src/components/bottom-nav/Bottom-Nav.js';
import axios from 'axios';
import { Provider } from 'react-redux';
import store from './src/store/index.js';


const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#09FF00',
    accent: '#f1c40f',
  },
};



export default function App() {

  return (
    <PaperProvider theme={theme}>
        <Bottom>
        <Provider store={store()}>
        <Dashboard />
      </Provider>

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
