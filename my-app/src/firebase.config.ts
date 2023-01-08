// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDS8J0AYdwIKavgp0BbnSUXm6UjSH1nwsU",
  authDomain: "linkedin-479b9.firebaseapp.com",
  projectId: "linkedin-479b9",
  storageBucket: "linkedin-479b9.appspot.com",
  messagingSenderId: "238909206874",
  appId: "1:238909206874:web:cab971da018d34afd54363",
  measurementId: "G-MMTKRNTMC7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore()