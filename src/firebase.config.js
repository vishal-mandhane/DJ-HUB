// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPtutbaZ-cQUdyhVookOTON4EYUwMB52o",
  authDomain: "dj-hub-ce66d.firebaseapp.com",
  projectId: "dj-hub-ce66d",
  storageBucket: "dj-hub-ce66d.appspot.com",
  messagingSenderId: "764711384483",
  appId: "1:764711384483:web:d63bbffdec62f6aa2ad616",
  measurementId: "G-E7DSCXN1Y5"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);