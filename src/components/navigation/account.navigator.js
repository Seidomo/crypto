import React from 'react';
import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack"

import { AccountScreen } from '../login-view/screens/account.screen'
import { LoginScreen } from '../login-view/screens/login.screen'
import { RegisterScreen } from '../login-view/screens/register.screen'

const Stack = createStackNavigator();

export const AccountNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Main" component={AccountScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
  </Stack.Navigator>
);

