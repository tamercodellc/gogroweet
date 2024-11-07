import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDwrgsW21LfN5q8TWuELoFzjMrboZJMzYI",
  authDomain: "tamerdigital-349f3.firebaseapp.com",
  projectId: "tamerdigital-349f3",
  storageBucket: "tamerdigital-349f3.firebasestorage.app",
  messagingSenderId: "842038650610",
  appId: "1:842038650610:web:4e913bb7fc28ecfc35526b",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();