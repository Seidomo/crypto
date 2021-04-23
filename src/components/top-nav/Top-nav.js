import * as React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, StyleSheet } from 'react-native'


export default function Top() {

  return (
    <View style={styles.container}>
    <LinearGradient
      colors={['#09FF00', '#002244', 'transparent']}
      style={styles.background}
      start={{ x: 0, y: 0}}
      end={{ x: 1, y: 1 }}
      >
    <Text style={styles.text}>Cryptik</Text>
    </LinearGradient>
  </View>
  );
}


const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#002244',
      height: 115,
    },
    background: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: 550,
    },
    text: {
      backgroundColor: 'transparent',
      fontSize: 25,
      color: 'white',
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: '41%',
      marginTop: '15%',
    },
  });

