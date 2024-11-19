import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDSrPbWqKQsEdP4g7-NailZigTtxXGoeOY",
  authDomain: "reto14-90897.firebaseapp.com",
  projectId: "reto14-90897",
  storageBucket: "reto14-90897.firebasestorage.app",
  messagingSenderId: "566501744432",
  appId: "1:566501744432:web:01fee956ba49b78e6272f5",
  measurementId: "G-EBEMDC7GWW"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
