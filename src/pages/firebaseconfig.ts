import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, serverTimestamp } from 'firebase/firestore';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut as firebaseSignOut,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: "savvyvitians",
  storageBucket: "savvyvitians.firebasestorage.app",
  messagingSenderId: "1015996423008",
  appId: "1:1015996423008:web:38f6c49600df1feadadc05",
  measurementId: "G-27ETQQ5KFM"
};
// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Get Firebase services
export const auth = getAuth(app);
export const firestore = getFirestore(app);

// Utility functions
export const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};

export const signOut = () => {
  return firebaseSignOut(auth);
};

export const getServerTimestamp = serverTimestamp;

export default app;