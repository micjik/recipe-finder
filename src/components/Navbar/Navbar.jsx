import React from "react";
import logoImage from "../../assets/images/logo.svg";
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logoImage} alt="" />
      </div>
      <ul className="nav-link">
        <li>Home</li>
        <li>About</li>
        <li>Recipe</li>
      </ul>
      <div className="btn-btn">
        <button>Browse recipes</button>
      </div>
    </div>
  );
};

export default Navbar;
