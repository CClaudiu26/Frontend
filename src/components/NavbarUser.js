import React, { useState, useEffect } from "react";
import { Link , NavLink} from "react-router-dom";





const NavbarUser = ( {handleShow}) => {

 

 
  return (
    <div>

<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
       
  

        <div >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">
                Users
              </NavLink>
            </li>
            <li className="nav-item">
              <Link className="nav-link" exact to="/Departments" >
                Departments
              </Link>
            </li>

          

          </ul>
        </div>
        <Link className="btn btn-outline-light" onClick={handleShow} >Add User</Link>
        
      </div>
    </nav>



    
    </div>
  


      

    
  );
};

export default NavbarUser;