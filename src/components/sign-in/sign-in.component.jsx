
import Directory from "../directory/directory.component";
import { Outlet } from "react-router-dom";
import {signInWithGooglePopup} from '../../utils/firebase/firebase.utils'

const SignIn=() =>{

  const logGoogleuser= async() => {
    const response = await signInWithGooglePopup();
    console.log(response);
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