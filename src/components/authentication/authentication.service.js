// Auth and login functions adapted from Udemy Course: Complete React Native in 2021 by Andrei Neagoie and Mo Binni
// https://www.udemy.com/course/complete-react-native-mobile-development-zero-to-mastery-with-hooks/

import firebase from 'firebase/app';

export const loginRequest = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password);

