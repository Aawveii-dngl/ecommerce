import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBmnVlmdHkzEVd6rAR3Nr9HAC4knoAfHUI",
    authDomain: "ecommerce1-83140.firebaseapp.com",
    projectId: "ecommerce1-83140",
    storageBucket: "ecommerce1-83140.appspot.com",
    messagingSenderId: "270753519962",
    appId: "1:270753519962:web:f1c1d6cc3c733adf49fb63",
    measurementId: "G-6NQLZHC2DV"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle= () => auth.signInWithPopup(provider);

  export default firebase;