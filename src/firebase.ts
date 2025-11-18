// src/firebase.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyAMoYufbXkGQF3d4IL_oz5pDoe0MmFehzU",
  authDomain: "trainerstree-ad84e.firebaseapp.com",
  projectId: "trainerstree-ad84e",
  storageBucket: "trainerstree-ad84e.firebasestorage.app",
  messagingSenderId: "558041562947",
  appId: "1:558041562947:web:6a71041fc7d4913db379f6",
  measurementId: "G-2K72RLQT6W"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

