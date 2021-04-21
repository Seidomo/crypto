import React from "react";
import { Colors, Button } from 'react-native-paper';
import { Text, View } from "react-native";

import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  Title,
} from "../components/account.styles";

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <Title>Crypto</Title>

      <AccountContainer>
        <Button
/*           icon="lock-open-outline"
          mode="contained" */
          onPress={() => navigation.navigate('Login')}
        >
          Login
        </Button>

          <Button
/*             icon="email"
            mode="contained" */
            onPress={() => navigation.navigate('Register')}
          >
            Register
          </Button>

      </AccountContainer>
    </AccountBackground>
  );
};