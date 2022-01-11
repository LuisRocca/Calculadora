// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import 'firebase/compat/firestore' // la base de datos practicamente
import "firebase/compat/auth" // carpeta de auntenticasion

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-uIcK_e5kkUIi8HubpD9SgIZHqhADdII",
  authDomain: "crud-react-cfad9.firebaseapp.com",
  projectId: "crud-react-cfad9",
  storageBucket: "crud-react-cfad9.appspot.com",
  messagingSenderId: "719684532141",
  appId: "1:719684532141:web:6f8f563d3d7c1823fbd324"
};

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export {firebase , db , googleAuthProvider}