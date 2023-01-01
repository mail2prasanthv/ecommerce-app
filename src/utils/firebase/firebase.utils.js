// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore, doc,getDoc,setDoc } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDR2ZOjN54T4GRXDda-8gGJU8gznwwc6ZM",
  authDomain: "ecommerce-app-e8630.firebaseapp.com",
  projectId: "ecommerce-app-e8630",
  storageBucket: "ecommerce-app-e8630.appspot.com",
  messagingSenderId: "637218688942",
  appId: "1:637218688942:web:c0109369ce9e813020023f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup=()=>signInWithPopup(auth,provider);

export const db = getFirestore();

export const createuserDocumentFromAuthService= async(userAuth) => {
  const userDocRef = doc(db,'users', userAuth.uid);
  console.log("userDocRef:");
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log("userSnapshot:");
  console.log(userSnapshot);

  if(!userSnapshot.exists()) { // check the entryavailable in db

    const{displayName, email} = userAuth; // extracts required information from the Google authentication response.
    const createdAt = new Date();

    try {
      // create an entry in the fire store as json with attributes displayName, email, createdAt
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    }catch(error) {
      console.log('error creating the user', error.message);
    }

  }
return userDocRef;   
}

