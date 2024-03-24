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
  apiKey: "AIzaSyANnQrga6Cd2JLoKXLgcFPKglKJRtk3sbU",
  authDomain: "djhub-4d21c.firebaseapp.com",
  projectId: "djhub-4d21c",
  storageBucket: "djhub-4d21c.appspot.com",
  messagingSenderId: "966745852037",
  appId: "1:966745852037:web:9de01d9cb83336262801ec",
  measurementId: "G-CDDLFRXFXD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);