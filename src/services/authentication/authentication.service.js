import firebase from 'firebase/app';

export const loginRequest = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password);




/* 

import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBxDzr2kO93fi72iD-dy4q4V1a6nJMPkJg",
  authDomain: "crypto999.firebaseapp.com",
  projectId: "crypto999",
  storageBucket: "crypto999.appspot.com",
  messagingSenderId: "121642140096",
  appId: "1:121642140096:web:480e5122395731c7d10825"
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

*/