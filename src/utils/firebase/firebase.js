// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9HKQd1qbAcsfc99_XwCxvEGT2bwcXPGA",
  authDomain: "e-commerce-db-7b6f2.firebaseapp.com",
  projectId: "e-commerce-db-7b6f2",
  storageBucket: "e-commerce-db-7b6f2.appspot.com",
  messagingSenderId: "301203590560",
  appId: "1:301203590560:web:02665bddebc74e949e28c5",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

//setup database
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  //check in database with 'users' collection with specific doc id
  const userDocRef = doc(db, "users", userAuth.uid);

  //Get the doc reference
  const userSnapshot = await getDoc(userDocRef);

  //If it doesn't exist then create one
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  return userDocRef;
};
