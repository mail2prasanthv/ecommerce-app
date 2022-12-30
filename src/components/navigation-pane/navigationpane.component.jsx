
import Directory from "../directory/directory.component";
import { Outlet } from "react-router-dom";

const NavigationPane=() =>{


   
      return (
        <div>
          <h1>Logo</h1>
          <h1>Shop</h1>
          <h1>Contact</h1>
          <h1>sign In</h1>
          <Outlet/>
        </div>
      );
};

export default NavigationPane;