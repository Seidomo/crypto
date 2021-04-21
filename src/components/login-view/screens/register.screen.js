import React, { useState, useContext } from "react";
import { Colors, Button } from 'react-native-paper';
import { Text, View } from "react-native";

import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  AuthInput,
  ErrorContainer,
  Title,
} from "../components/account.styles";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const RegisterScreen = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatedPassword, setRepeatedPassword] = useState('');
  const { onRegister, error } = useContext(AuthenticationContext);

  return (
    <AccountBackground>
      <AccountCover />
      <Title>Crypto</Title>
      <AccountContainer>
        <AuthInput
          label="E-mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(u) => setEmail(u)}
        />

          <AuthInput
            label="Password"
            value={password}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(p) => setPassword(p)}
          />

          <AuthInput
            label="Repeat Password"
            value={repeatedPassword}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(p) => setRepeatedPassword(p)}
          />

        {error && (
          <ErrorContainer size="large">
            <Text>{error}</Text>
          </ErrorContainer>
        )}


          <Button
            icon="lock-open-outline"
            mode="contained"
            onPress={() => onRegister(email, password, repeatedPassword)}
          >
            Login
          </Button>

      </AccountContainer>
        <Button mode="contained" onPress={() => navigation.goBack()}>
          Back
        </Button>

    </AccountBackground>
  );
};