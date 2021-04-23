import * as React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';

import { AuthenticationContextProvider } from './src/components/authentication/authentication.context';
import { Navigation } from './src/components/navigation/index.js';

import { Provider } from 'react-redux';
import store from './src/store/index.js';


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
    <Provider store={store()}>
    <PaperProvider theme={theme}>
      <AuthenticationContextProvider>
        <Navigation/>
      </AuthenticationContextProvider>
    </PaperProvider>
    </Provider>

  );
}
