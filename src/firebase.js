import { useEffect, useState } from "react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPasssword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCODFD8li6tKlQSbuh024R_RmskIFQTa5w",
  authDomain: "todolist-a9d7d.firebaseapp.com",
  projectId: "todolist-a9d7d",
  storageBucket: "todolist-a9d7d.appspot.com",
  messagingSenderId: "439214739572",
  appId: "1:439214739572:web:e5b1a1d2457adfed7fc121"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function signup(email, password) {
return createUserWithEmailAndPasssword(auth, email, password);
}

export function LogIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
    }

export function LogOut() {
  return signOut(auth);
}

// Custom Hook
export function useAuth() {
    const [ currentUser, setCurrentUser ] = useState();

    useEffect(() => {
     const unsub =  onAuthStateChanged(auth, user => setCurrentUser(user));
    return unsub;
    }, [])
  
    return currentUser;
}

