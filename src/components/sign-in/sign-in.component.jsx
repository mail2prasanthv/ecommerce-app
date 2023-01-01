
import Directory from "../directory/directory.component";
import { Outlet } from "react-router-dom";
import {signInWithGooglePopup, createuserDocumentFromAuthService} from '../../utils/firebase/firebase.utils'

const SignIn=() =>{

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
        </div>
        
      );
};

export default SignIn;