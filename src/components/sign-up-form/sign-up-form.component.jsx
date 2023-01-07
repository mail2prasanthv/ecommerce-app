
import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createuserDocumentFromAuthService } from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
};




const SignUpForm=() => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {displayName, email, password, confirmPassword}  = formFields;

  const handleChange =(event) => {
    const {name, value} = event.target; // get name and value from the various fields on Change
    
    setFormFields({...formFields,[name]:value}); // upate only one field in the json object

  };

  const handleSubmit = async(event) => {
    event.preventDefault(); // prevent default behaviour of a form.
  
    if(password!= confirmPassword) {
      alert("Passwords do not match");
      return;
    }
  
    try {
       const  {user} = await createAuthUserWithEmailAndPassword(email,password);

       console.log( user);
       await createuserDocumentFromAuthService(user, {displayName});

    } catch(error) {
      console.log( error);
      if(error.code== 'auth/email-already-in-use') {
        alert('Cannot create a user, email alredy in use');
      } else {
        console.log( error.code);
        console.log( 'user Creation encountered some error');
      }
    }
  
  } 

  return(
    <div>
      <h1>SignUp with email and Password</h1>
      <form onSubmit={handleSubmit}>
        <label>Display Name</label>
        <input  type ="text" required onChange={handleChange} name="displayName" value={displayName}></input>

        <label>Email</label>
        <input type ="email" required onChange={handleChange} name="email" value={email}></input>

        <label>Password</label>
        <input type ="password" required onChange={handleChange} name="password" value={password}></input>

        <label>Confirm Password</label>
        <input type ="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword}></input>

        <button type="submit">Sign Up</button>
      </form>

    </div>
  );
}


export default SignUpForm;