// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database"
import firebase from 'firebase/compat/app'

const API_KEY = process.env.REACT_APP_API_KEY;
const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: "bountyhunters-1dc0c.firebaseapp.com",
    databaseURL: "https://bountyhunters-1dc0c-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "bountyhunters-1dc0c",
    storageBucket: "bountyhunters-1dc0c.appspot.com",
    messagingSenderId: "557763500153",
    appId: "1:557763500153:web:a3a728b2a30ce8018f5ca8",
    measurementId: "G-XTE67RGP4K"
};

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig)
}

const db = getDatabase()
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

export { db }
export default app
