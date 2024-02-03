// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDs9p03lbKGLoOgLbR1eTTCFw1JssGE8eI",
  authDomain: "blogram-long1410.firebaseapp.com",
  projectId: "blogram-long1410",
  storageBucket: "blogram-long1410.appspot.com",
  messagingSenderId: "15919946792",
  appId: "1:15919946792:web:a9c8d4ff88438c3141691d",
  measurementId: "G-G1ZYG4EXM6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);