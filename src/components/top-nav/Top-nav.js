import * as React from 'react';
import { Appbar } from 'react-native-paper';
// import { LinearGradient } from 'expo-linear-gradient';
// import { View, Text, StyleSheet } from 'react-native'

export default function Top() {

    // <View style={styles.container}>  
    // <LinearGradient
    // colors={['red', 'yellow', 'green' ]}
    // style={styles.linearGradient}
    // >
    // </LinearGradient>
    // </View>


//     <View style={styles.container}>
//     <LinearGradient
//       // Background Linear Gradient
//       colors={['rgba(0,0,0,0.8)', 'transparent']}
//       style={styles.background}
//     />
//         <Appbar.Header>
//        <Appbar.Content title="Howdy" subtitle={'Team Crypto'} style={styles.background}/>
//     </Appbar.Header>
//     <LinearGradient
//       // Button Linear Gradient
//       colors={['#4c669f', '#3b5998', '#192f6a']}
//       style={styles.button}>
//               <Appbar.Header>
//        <Appbar.Content title="Howdy" subtitle={'Team Crypto'} />
//     </Appbar.Header>
//       <Text style={styles.text}>Sign in with Facebook</Text>
//     </LinearGradient>
//   </View>

  return (
    <Appbar.Header>
        <Appbar.Content title="Howdy" subtitle={'Team Crypto'}/>
    </Appbar.Header>
  );
}

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       alignItems: 'center',
//       justifyContent: 'center',
//       backgroundColor: 'orange',
//     },
//     background: {
//       position: 'absolute',
//       left: 0,
//       right: 0,
//       top: 0,
//       height: 300,
//     },
//     button: {
//       padding: 15,
//       alignItems: 'center',
//       borderRadius: 5,
//     },
//     text: {
//       backgroundColor: 'transparent',
//       fontSize: 15,
//       color: '#fff',
//     },
//   });