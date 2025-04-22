// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDIE6unMWBBz8dmNKSLFS3eK0spJ1qohA",
  authDomain: "netflix-clone-2a414.firebaseapp.com",
  databaseURL: 'https://netflix-clone-2a414-default-rtdb.firebaseio.com',
  projectId: "netflix-clone-2a414",
  storageBucket: "netflix-clone-2a414.firebasestorage.app",
  messagingSenderId: "92543935666",
  appId: "1:92543935666:web:c19a3a587ba9c1549a15ab",
  measurementId: "G-K42SMB2RF9"
};

// Initialize Firebase

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app
export { auth, db }