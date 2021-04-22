import React, { useContext } from 'react';
import { Button } from 'react-native-paper';

import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  Title,
} from '../login-view/components/account.styles';

import { AuthenticationContext } from '../authentication/authentication.context';

export const LogOut = () => {

  const { onLogout, error } = useContext(AuthenticationContext);

  return (
    <AccountBackground>
      <AccountCover />
      <Title>Account Logout</Title>
      <AccountContainer>

        <Button
          icon="lock-open-outline"
          mode="contained"
          onPress={() => onLogout()}
        >
          Log-Out
          </Button>

      </AccountContainer>
    </AccountBackground>
  );
};