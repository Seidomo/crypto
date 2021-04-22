// Auth and login functions adapted from Udemy Course: Complete React Native in 2021 by Andrei Neagoie and Mo Binni
// https://www.udemy.com/course/complete-react-native-mobile-development-zero-to-mastery-with-hooks/

import styled from 'styled-components/native';
import { TextInput } from 'react-native-paper';
import { Text } from 'react-native';

export const AccountBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/levi-midnight-2OuUx9VDl74-unsplash.jpg")
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
  color: black;
  background-color: #A5acaf;
  width: 300px;
`;

export const Title = styled(Text)`
  font-size: 38px;
  color: #FFFFFF;
`;

export const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin-top: 8px;
  margin-bottom: 8px;
`;

/* primary: '#09FF00',
accent: '#002244',
background: '#002244',
surface: '#A5acaf', */