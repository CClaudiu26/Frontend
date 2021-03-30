import React, {useState} from "react";
import { Link, NavLink } from "react-router-dom";
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/button'
import Tree from './Tree/tree'


const Navbar = ( {handleShow, treeShow} ) => {


  
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
              <NavLink className="nav-link" exact to="/Departments">
                Departments
              </NavLink>
            </li>

            <li className="nav-item">
              <Link className="nav-link" type  = "button" onClick = {treeShow}>
                Tree
              </Link>
            </li>

          </ul>
        </div>

        <Link className="btn btn-outline-light" onClick={handleShow}>Add Department </Link>
       

      </div>
    </nav>

    



    </div>
   
  );
};

export default Navbar;