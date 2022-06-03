import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6VRXAaQsDIc9YVMxWiq5XoezgqH9HxL8",
  authDomain: "clone-8af67.firebaseapp.com",
  projectId: "clone-8af67",
  storageBucket: "clone-8af67.appspot.com",
  messagingSenderId: "1087625387945",
  appId: "1:1087625387945:web:9152478e308faeb672aeb8",
  measurementId: "G-KD6PJ7YNNB",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
