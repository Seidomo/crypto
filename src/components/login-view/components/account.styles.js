import styled from 'styled-components/native';
import { Button, TextInput } from 'react-native-paper';
import { Text, View } from 'react-native';

export const AccountBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/coinsv.jpg"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const AccountContainer = styled.View`
  background-color: rgba(50, 50, 50, 0.8);
  padding: 32px;
  margin-top: 8px;
`;

export const AuthButton = styled.Button`
  color: #0062ff;
  padding: 32px;
`

export const AuthInput = styled(TextInput)`
  width: 300px;
`;

export const Title = styled(Text)`
  font-size: 30px;
`;

export const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin-top: 8px;
  margin-bottom: 8px;
`;