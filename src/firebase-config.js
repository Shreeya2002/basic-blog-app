import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVg5twRayuMVb_VTwyWGf6OJPvPVxpSkI",
  authDomain: "sdp-first-24606.firebaseapp.com",
  projectId: "sdp-first-24606",
  storageBucket: "sdp-first-24606.appspot.com",
  messagingSenderId: "654838311698",
  appId: "1:654838311698:web:2c6055cae2dacd03a321cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();