import Dashboard from '../dashboard-view/Dashboard.js'
import * as React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { AuthenticationContextProvider } from '../authentication/authentication.context';
import Bottom from '../bottom-nav/Bottom-Nav.js';
import { Provider } from 'react-redux';
import store from '../../store/index.js';
import 'firebase/firestore';
import 'firebase/auth';
import { StyleSheet } from 'react-native';
import Top from '../top-nav/Top-nav.js'
import { LinearGradient } from 'expo-linear-gradient';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#09FF00',
    accent: '#003344',
    background: '#002244',
    surface: '#A5acaf',
  },
};

export default function Main(){
  return (
    <PaperProvider theme={theme}>
      <Top />  
      <Bottom>
      <Provider store={store()}>
          <Dashboard />
        </Provider>
      </Bottom>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#002244',
    height: 115,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 1000,
  },
})