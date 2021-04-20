
import React from "react";

import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
} from "../components/account.styles";

export const AccountScreen = () => {
  return <AccountBackground>
    <AccountCover />
    <AccountContainer>
      <AuthButton title="login" />
    </AccountContainer>
  </AccountBackground>;
};