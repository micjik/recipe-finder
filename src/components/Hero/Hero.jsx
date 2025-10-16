import React from "react";
import heroImage from "../../assets/images/image-home-hero-large.webp";
import heroIcon1 from "../../assets/images/icon-minimum-fuss.svg"
import heroIcon2 from "../../assets/images/icon-search-in-seconds.svg"
import heroIcon3 from "../../assets/images/icon-whole-food-recipes.svg"
import { Link } from "react-router";

import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <h1>Healthy meals, zero fuss</h1>
      <p>
        Discover eight quick, whole food recipes that you can cook tonight -no
        processed junk, no guess work.
      </p>
      <Link to='/recipe'>
      <div className="btn-btn">
        <button>Start exploring</button>
      </div>
      </Link>

      <div className="hero-img">
        <img src={heroImage} alt="" />
      </div>
      <div className="hero-bottom">
        <h1>What you'll get</h1>
        <div className="hero-flex">
            <div className="hero-list">
                <img src={heroIcon3} alt="" />
                <h3>Whole-food recipes</h3>
                <h5>Each dish uses everyday, unprocessed ingredients</h5>
            </div>
            <div className="hero-list">
                <img src={heroIcon1} alt="" />
                
                <h3>Whole-food recipes</h3>
                <h5>Each dish uses everyday, unprocessed ingredients</h5>
            </div>
            <div className="hero-list">
                <img src={heroIcon2} alt="" />
                <h3>Whole-food recipes</h3>
                <h5>Each dish uses everyday, unprocessed ingredients</h5>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
