
import Directory from "../directory/directory.component";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
  auth,
  signInWithGooglePopup, 
  signInWithGoogleRedirect,
  createuserDocumentFromAuthService} from '../../utils/firebase/firebase.utils'
import { async } from "@firebase/util";
import SignUpForm from "../sign-up-form/sign-up-form.component";

const SignIn=() =>{

  useEffect(
    () =>async() => {
    const response = await getRedirectResult(auth);
    if(response) {
      const  userDocRef = await createuserDocumentFromAuthService(response.user);
    }
  },[])

  const logGoogleuser= async() => {
    const {user} = await signInWithGooglePopup();
    const  userDocRef = await createuserDocumentFromAuthService(user);
    
  }
 

   
      return (
        <div>
          
          <h1>sign In Page</h1>
          <button onClick={logGoogleuser}>
            Sign in with Google
          </button>
          <button onClick={signInWithGoogleRedirect}>
            Sign in with Google Redirect
          </button>
          <SignUpForm/>
        </div>
        
      );
};

export default SignIn;