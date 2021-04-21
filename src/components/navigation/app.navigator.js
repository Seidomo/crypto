import Dashboard from '../dashboard-view/Dashboard.js'
import * as React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { AuthenticationContextProvider } from '../../services/authentication/authentication.context';
import Bottom from '../bottom-nav/Bottom-Nav.js';
import { Provider } from 'react-redux';
import store from '../../store/index.js';
import 'firebase/firestore';
import 'firebase/auth';
import Top from '../top-nav/Top-nav.js'

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
