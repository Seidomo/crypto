import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Main from './app.navigator.js';
import { AccountNavigator } from './account.navigator';
import { AuthenticationContext } from '../authentication/authentication.context';

export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);

  return (
    <NavigationContainer>
      {isAuthenticated ? <Main/>: <AccountNavigator />}
    </NavigationContainer>
  );
};


