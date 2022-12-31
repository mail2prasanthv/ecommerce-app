
import Directory from "../directory/directory.component";
import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import {ReactComponent as ApplicationLogo} from "../../assets/crown.svg"
import "./navigation.styles.scss"

const NavigationPane=() =>{


   
      return (
      <Fragment>
        <div className="navigation">

        <Link className='logo-container' to="/">
          <ApplicationLogo className="logo"/>

        </Link>

          <div className="nav-links-container ">
            <Link className='nav-link' to="/shop">Shop</Link> 
          </div>

          <div className="nav-links-container ">
            <Link className='nav-link' to="/contact">Contact</Link> 
          </div>

          <div className="nav-links-container ">
            <Link className='nav-link' to="/signin">Sign In</Link> 
          </div>

          
          
        </div>
        <Outlet/>
      </Fragment>
      );
};

export default NavigationPane;