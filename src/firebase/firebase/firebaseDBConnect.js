import firebase, {initializeApp, getApps, getApp} from 'firebase/app';
import {initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
    getFirestore,
    collection,
    doc,
    documentId,
    getDocs,
    getDoc,
    addDoc,
    updateDoc,
    setDoc,
    deleteDoc,
    query,
    where,
} from 'firebase/firestore'

import {
    getAuth,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    verifyPasswordResetCode,
    GoogleAuthProvider,
    signOut,
} from 'firebase/auth'

const firebaseConfig = {
  // Thông tin cấu hình Firebase của bạn
    apiKey: "AIzaSyA_DYUlFAEQN0wLBVnRQxT-ddo-T40-fPY",
    authDomain: "fordance-8ac11.firebaseapp.com",
    projectId: "fordance-8ac11",
    storageBucket: "fordance-8ac11.appspot.com",
    messagingSenderId: "620378991871",
    appId: "1:620378991871:android:62399531dedcbac74e70ca"
};

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

// if (!getApps().length) {
//     initializeApp(firebaseConfig);
// }


// initialize Firebase App
const app = initializeApp(firebaseConfig)

export {
    getFirestore,
    collection,
    doc,
    documentId,
    getDoc,
    getDocs,
    addDoc,
    updateDoc,
    setDoc,
    deleteDoc,
    query,
    where,

    getAuth,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    verifyPasswordResetCode,
    // GoogleAuthProvider,
    signOut,
}

// export const auth = getAuth();
export const auth = initializeAuth(app, {
    // persistence: setPersistence(browserLocalPersistence(AsyncStorage))
    persistence: getReactNativePersistence(AsyncStorage)
});
export const firestore = getFirestore();