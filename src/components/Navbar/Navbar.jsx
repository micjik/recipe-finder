import React from "react";
import logoImage from "../../assets/images/logo.svg";
import "./Navbar.css";
import { Link, NavLink } from "react-router";
import RecipeDetails from "../../Pages/RecipeDetails/RecipeDetails";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logoImage} alt="" />
      </div>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active-link" : "nav-link")}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active-link" : "nav-link")}
        >
          About
        </NavLink>
        <NavLink
          to="/recipe"
          className={({ isActive }) => (isActive ? "active-link" : "nav-link")}
        >
          Recipe
        </NavLink>
      </nav>
      <Link to='/recipe'>
      <div className="btn-btn">
        <button>Browse recipes</button>
      </div>
      </Link>
    </div>
  );
};

export default Navbar;
