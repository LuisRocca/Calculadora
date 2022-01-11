import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../actions/authAction";
import { limpiar } from "../actions/nominas";

const Navbar = () => {

  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(limpiar())
   dispatch(logout())  
  }

  
  return (
    <nav  className="black">
      <div className="nav-wrapper">
        <span className="brand-logo">
          Calculadora Nominal
        </span>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <button onClick={handleLogout} className="waves-effect waves-light btn red" >Logout</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
