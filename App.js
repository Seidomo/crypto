import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Dashboard from './src/components/dashboard-view/Dashboard.js'
import * as React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { AuthenticationContextProvider } from './src/services/authentication/authentication.context';
import Bottom from './src/components/bottom-nav/Bottom-Nav.js';
import axios from 'axios';
import { Provider } from 'react-redux';
import store from './src/store/index.js';
import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';
import Top from './src/components/top-nav/Top-nav.js'
import { Navigation } from './src/components/navigation/index.js';
// import { NavigationContainer } from "@react-navigation/native";

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#09FF00',
    accent: '#002244',
    background: '#002244',
    surface: '#A5acaf',
  },
};

const firebaseConfig = {
  apiKey: "AIzaSyBxDzr2kO93fi72iD-dy4q4V1a6nJMPkJg",
  authDomain: "crypto999.firebaseapp.com",
  projectId: "crypto999",
  storageBucket: "crypto999.appspot.com",
  messagingSenderId: "121642140096",
  appId: "1:121642140096:web:480e5122395731c7d10825",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {

  return (

    <PaperProvider theme={theme}>
      <AuthenticationContextProvider>
      <Top />  
      <Bottom>
        <Provider store={store()}>
          <Dashboard />
        </Provider>
      </Bottom>
      </AuthenticationContextProvider>
    </PaperProvider>

  );
}
/*
<Top />
<Bottom>
  <Provider store={store()}>
    <Dashboard />
    <Navigation />
  </Provider>
</Bottom>
 */

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
