import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Text } from 'react-native';
import Main from './app.navigator.js';
import { AccountNavigator } from "./account.navigator";
import { AuthenticationContext } from "../../services/authentication/authentication.context";

export const Navigation = () => {
  const { isAuthenticated, user } = useContext(AuthenticationContext);

  return (
    <NavigationContainer>
      {isAuthenticated ? <Main/>: <AccountNavigator />}
    </NavigationContainer>
  );
};


