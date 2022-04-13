// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.REACT_aAPP_apiKey,
  authDomain:process.env.REACT_aAPP_authDomain,
  projectId:process.env.REACT_aAPP_projectId,
  storageBucket:process.env.REACT_aAPP_storageBucket,
  messagingSenderId:process.env.REACT_aAPP_messagingSenderId,
  appId:process.env.REACT_aAPP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)