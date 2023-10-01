// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore";
import { getStorage } from 'firebase/storage';

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADvxzDuKt7NwkCmUAQC2loHL9fgFrvy3Y",
  authDomain: "sit-313task7-1p.firebaseapp.com",
  projectId: "sit-313task7-1p",
  storageBucket: "sit-313task7-1p.appspot.com",
  messagingSenderId: "629963976858",
  appId: "1:629963976858:web:0faa688458c32be5f8af23",
  measurementId: "G-0CCP8YF9FZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app); 
export const storage = getStorage(app);