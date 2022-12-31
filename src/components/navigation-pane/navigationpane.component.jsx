
import Directory from "../directory/directory.component";
import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import { Link } from "react-router-dom";

const NavigationPane=() =>{


   
      return (
      <Fragment>
        <div className="navigation">

        <Link className='logo-container' to="/"><div>Logo</div> </Link>

          <div className="links-container">
            <Link className='nav-link' to="/shop">Shop</Link> 
          </div>

          <div className="links-container">
            <Link className='nav-link' to="/contact">Contact</Link> 
          </div>

          <div className="links-container">
            <Link className='nav-link' to="/signin">Sign In</Link> 
          </div>

          
          <Outlet/>
        </div>
      </Fragment>
      );
};

export default NavigationPane;