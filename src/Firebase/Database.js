// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { getAuth } from "firebase/auth";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkFXn8YzZuoxGKQ4pEGakHDhrV1WXmTrw",
  authDomain: "hackaton-e4f92.firebaseapp.com",
  projectId: "hackaton-e4f92",
  storageBucket: "hackaton-e4f92.appspot.com",
  messagingSenderId: "355467473679",
  appId: "1:355467473679:web:ea52f1a59a61b8f2ac847a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)


const auth = getAuth(app);

export {db , auth}


