import styled from "styled-components/native";

export const AccountBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/coinv.jpg"),
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
`:

export const AccountContainer = styled.View`
  background-color: rgba(0, 0, 0, 0.8);
  padding: 32px;
  margin-top: 8px;
`;

export const AuthButton = styled.Button.attrs({
  color: #0062ff,
})