// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDK5H05c7m2BkIVY43BGe2i5nCOXJD7TTg",
  authDomain: "twitter-clone-b20a6.firebaseapp.com",
  projectId: "twitter-clone-b20a6",
  storageBucket: "twitter-clone-b20a6.firebasestorage.app",
  messagingSenderId: "493696470640",
  appId: "1:493696470640:web:0335a1e9e73f7ad7d4aeb5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const storage = getStorage()