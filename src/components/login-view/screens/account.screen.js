// Auth and login functions adapted from Udemy Course: Complete React Native in 2021 by Andrei Neagoie and Mo Binni
// https://www.udemy.com/course/complete-react-native-mobile-development-zero-to-mastery-with-hooks/

import React from "react";
import { Button } from 'react-native-paper';

import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  Title,
} from "../components/account.styles";

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <Title>Cryptik</Title>

      <AccountContainer>
        <Button
          onPress={() => navigation.navigate('Login')}
        >
          Login
        </Button>

          <Button
            onPress={() => navigation.navigate('Register')}
          >
            Register
          </Button>

      </AccountContainer>
    </AccountBackground>
  );
};