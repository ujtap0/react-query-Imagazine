import { initializeApp } from "firebase/app";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
}

const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

const db = getFirestore();

export const auth = getAuth();

export const signInWithGogglePopup = () => signInWithPopup(auth, googleProvider);

export const googleSignOut = () => signOut(auth);

export const onAuthStateChangeListner = (callback) =>  onAuthStateChanged
(auth, callback);

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => { 
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        console.log(userAuth)
        unsubscribe()
        resolve(userAuth)
      },
      reject
    )
  })
}

export const setDefaultBookmarkFromAuth = async(user) => {
  if(!user) return;
  const userDocRef = doc(db, 'users', user.uid);
  const userSnapshot = await getDoc(userDocRef);
  if(!userSnapshot.exists()){
    const defaultBookmark = [];
    await setDoc(userDocRef, {defaultBookmark})
  }
}

export const getBookmark = async(uid) => {
  console.log('실행됨')
  if(!uid) return;
  const userDocRef = doc(db, 'users', uid);
  const res = await getDoc(userDocRef);
  const data = res.data();
  console.log(data);
  return data;
}