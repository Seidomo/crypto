import React, { useContext } from 'react';
import { Bottom } from "../../components/bottom-nav/Bottom-Nav";
import { AuthenticationContext } from '../services/authentication/authentication.context';
import { AccountNavigator } from './account.navigator';
import { NavigationContainer } from '@react-navigation/native'

export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);

  return isAuthenticated ? (
    <Bottom />
  ) : (
    <AccountNavigator />
  );
};