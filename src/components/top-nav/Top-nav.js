import * as React from 'react';
import { Appbar } from 'react-native-paper';
// import LinearGradient from 'react-native-linear-gradient';

export default function Top() {

  return (
    <Appbar.Header>
       <Appbar.Content title="Howdy" subtitle={'Team Crypto'} />
    </Appbar.Header>
  );
}