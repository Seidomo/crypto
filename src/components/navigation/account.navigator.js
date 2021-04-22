// Auth and login functions adapted from Udemy Course: Complete React Native in 2021 by Andrei Neagoie and Mo Binni
// https://www.udemy.com/course/complete-react-native-mobile-development-zero-to-mastery-with-hooks/
// https://www.udemy.com/user/andrei-neagoie/
// https://www.udemy.com/user/mo-binni/

import React from 'react';
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

