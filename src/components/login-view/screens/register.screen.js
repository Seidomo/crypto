import React, { useState, useContext } from "react";

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
            label="Repeated Password"
            value={repeatedPassword}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(p) => setRepeatedPassword(p)}
          />
          

        {error && (
          <ErrorContainer size="large">
            <Text variant="error">{error}</Text>
          </ErrorContainer>
        )}


          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            onPress={() => onRegister(email, password, repeatedPassword)}
          >
            Login
          </AuthButton>

      </AccountContainer>
        <AuthButton mode="contained" onPress={() => navigation.goBack()}>
          Back
        </AuthButton>

    </AccountBackground>
  );
};