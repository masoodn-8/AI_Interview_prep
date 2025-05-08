// Import the functions you need from the SDKs you need
import {initializeApp, getApp, getApps} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDpcFkrEubLgyoy71Q6IJhN_mzvAN2obGI",
    authDomain: "prepwai-613ef.firebaseapp.com",
    projectId: "prepwai-613ef",
    storageBucket: "prepwai-613ef.firebasestorage.app",
    messagingSenderId: "369196682447",
    appId: "1:369196682447:web:aad7168b1bd674b03c7bba",
    measurementId: "G-F57HVNH7VQ"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig): getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);