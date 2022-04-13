// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCY3M8Jhq6e232-hiXD-HDR7tIkN2F6BXE",
  authDomain: "car-services-7ca4d.firebaseapp.com",
  projectId: "car-services-7ca4d",
  storageBucket: "car-services-7ca4d.appspot.com",
  messagingSenderId: "412004470685",
  appId: "1:412004470685:web:d07b83dec50fee1c422974"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)