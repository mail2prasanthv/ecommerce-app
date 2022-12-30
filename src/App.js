import { getByTitle } from "@testing-library/react";
import { Routes, Route } from "react-router-dom";
import NavigationPane from "./components/navigation-pane/navigationpane.component";
import Contact from "./components/contact/Contact.component";
import SignIn from "./components/sign-in/sign-in.component";    

import Home from "./components/home/home.component";

function App() {

  return (  
  
    <Routes>
       <Route path='/' element={<NavigationPane/>}> 
          <Route index element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/signin' element={<SignIn/>}/>
       </Route>
    </Routes>
  
  );
}

export default App;
