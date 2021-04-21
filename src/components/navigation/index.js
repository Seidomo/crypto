import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Text } from 'react-native';

import { AccountNavigator } from "./account.navigator";
import { AuthenticationContext } from "../../services/authentication/authentication.context";

export const Navigation = () => {
  const { isAuthenticated, user } = useContext(AuthenticationContext);

  return (
    <NavigationContainer>
      {console.log(isAuthenticated)}
      {console.log(user)}
      {isAuthenticated ? <Text>YOU ARE AUTHORIZED</Text> : <AccountNavigator />}
    </NavigationContainer>
  );
};


