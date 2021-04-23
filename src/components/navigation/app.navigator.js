import * as React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import Bottom from '../bottom-nav/Bottom-Nav.js';
import 'firebase/firestore';
import 'firebase/auth';
import { StyleSheet } from 'react-native';
import Top from '../top-nav/Top-nav.js'


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