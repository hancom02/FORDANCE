// import firebase, { initializeApp } from 'firebase/app';
// import { GoogleSignin } from '@react-native-google-signin/google-signin';
import {initializeApp, getApps } from '@react-native-firebase/app';

import firestore, {
    getFirestore, 
    collection, 

    doc, 
    getDoc, 
    getDocs, 
    addDoc,
    updateDoc,
    deleteDoc,

    deleteField,

    orderBy,
    where,
    limit,
    and,
    or,
    
} from '@react-native-firebase/firestore'

// import {
//     getFirestore,
//     collection,
//     doc,
//     documentId,
//     getDocs,
//     getDoc,
//     addDoc,
//   } from 'firebase/firestore'

// import {
//     getAuth,
//     onAuthStateChanged,
//     createUserWithEmailAndPassword,
//     signInWithEmailAndPassword,
//     sendPasswordResetEmail,
//     verifyPasswordResetCode,
//     GoogleAuthProvider,
//     signOut,
// } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyA_DYUlFAEQN0wLBVnRQxT-ddo-T40-fPY",
    authDomain: "fordance-8ac11.firebaseapp.com",
    projectId: "fordance-8ac11",
    storageBucket: "fordance-8ac11.appspot.com",
    messagingSenderId: "620378991871",
    appId: "1:620378991871:android:62399531dedcbac74e70ca"
}

// GoogleSignin.configure({
//     webClientId: '',
// });

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth();
// const firebaseDatabase = getFirestore();
// const provider = new GoogleAuthProvider();


if (!getApps().length) {
    initializeApp(firebaseConfig);
}

const firebaseDatabase = firestore();
// console.log("FIREBASE DBR", firebaseDatabase)

export {
    getFirestore,
    collection,
    doc,
    updateDoc,
    getDocs,
    getDoc,
    addDoc,
    deleteDoc,
    deleteField,
    orderBy,
    where,
    limit,
    and,
    or,
    firebaseDatabase,
}


