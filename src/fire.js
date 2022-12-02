import firebase from "firebase/compat/app";

import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDEVYsCdutaUBFKICag_A6dkDMGkpaxZTw",
  authDomain: "farfetch-e9800.firebaseapp.com",
  projectId: "farfetch-e9800",
  storageBucket: "farfetch-e9800.appspot.com",
  messagingSenderId: "439453347416",
  appId: "1:439453347416:web:09107bc036f904e72ee42d",
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
