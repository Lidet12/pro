// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-WTxn6VPBLB6zxzV8UmJnj09cow0nJxk",
  authDomain: "first-pro-30055.firebaseapp.com",
  projectId: "first-pro-30055",
  storageBucket: "first-pro-30055.appspot.com",
  messagingSenderId: "592863011563",
  appId: "1:592863011563:web:ab2bd90b12124cf6e0d4ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth =getAuth(app);
export const provider = new GoogleAuthProvider();
export const database = getFirestore(app);
