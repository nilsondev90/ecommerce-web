import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDuJm0Vw-BH0F2YIm52HrM3oER-wywHa2U",
    authDomain: "ecommerce-store-1efe1.firebaseapp.com",
    projectId: "ecommerce-store-1efe1",
    storageBucket: "ecommerce-store-1efe1.appspot.com",
    messagingSenderId: "628252872519",
    appId: "1:628252872519:web:bec8846b9d0f0e42ee4662"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()