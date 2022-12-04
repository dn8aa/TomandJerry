
import firebase from "firebase/compat/app"; 
 
import "firebase/compat/app"; 
import "firebase/compat/auth"; 
 
const firebaseConfig = {
  apiKey: "AIzaSyCCdMP_PBRAqZ40cEX3n2w_G0ZUCzi-f7A",
  authDomain: "hackathon-makers-f6984.firebaseapp.com",
  projectId: "hackathon-makers-f6984",
  storageBucket: "hackathon-makers-f6984.appspot.com",
  messagingSenderId: "524972485218",
  appId: "1:524972485218:web:a3014d20d0838d5e507f3b"
};
// Initialize Firebase 
const fire = firebase.initializeApp(firebaseConfig); 
 
export default fire;



