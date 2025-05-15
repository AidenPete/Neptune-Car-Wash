import { initializeApp } from "firebase/app";
import { 
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAmQd3FquBu0hF8DZZ-hE-iCffZieLLc4c",
    authDomain: "neptune-car-wash.firebaseapp.com",
    projectId: "neptune-car-wash",
    storageBucket: "neptune-car-wash.firebasestorage.app",
    messagingSenderId: "356006314086",
    appId: "1:356006314086:web:f5373d91556e0717cfada7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Authentication functions
export const signUp = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const logIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logOut = () => {
  return signOut(auth);
};

export const onAuthStateChange = (callback) => {
  return onAuthStateChanged(auth, callback);
};