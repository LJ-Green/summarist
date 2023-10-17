// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClZWtlPaOKeKcIcld-81059xfbEtZMauw",
  authDomain: "summarist-973d2.firebaseapp.com",
  projectId: "summarist-973d2",
  storageBucket: "summarist-973d2.appspot.com",
  messagingSenderId: "589316949635",
  appId: "1:589316949635:web:5eaa09103da81793b47db6",
  measurementId: "G-GVQFHLWJX8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { auth };