import * as React from 'react';
import { Appbar } from 'react-native-paper';

export default function Top() {

  return (
    <Appbar.Header>
       <Appbar.Content title="Howdy" subtitle={'Team Crypto'} />
    </Appbar.Header>
  );
}