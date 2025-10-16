import React from "react";
import imageMission from "../../assets/images/image-about-our-mission-large.webp";
import iconBullet from "../../assets/images/icon-bullet-point.svg"
import "./About.css";
import { Link } from "react-router";
import beyondPlate from "../../assets/images/image-about-beyond-the-plate-large.webp"

const About = () => {
  return (
    <div className="about-container">
      <h1>Our Mission</h1>
      <p>
        Help more people cook nourishing meals, more often. Healthy Recipe
        Finder was created to prove that healthy eating can be convenient,
        affordable, and genuinely delicious. We showcase quick, whole-food
        dishes that anyone can master—no fancy equipment, no ultra-processed
        shortcuts—just honest ingredients and straightforward steps
      </p>
      <div className="img-container">
        <img src={imageMission} alt="" />
      </div>
          <div className="content-container">
            <div className="item-container">
              <img src={iconBullet} alt="" />
              <div className="text-container">
                
            <h1>Why we exist Cut through the noise</h1>
            <p>The internet is bursting with recipes, yet most busy cooks
               still default to take-away or packaged foods. We curate a
                tight collection of fool-proof dishes so you can skip the 
                scrolling and start cooking.
            </p>
            </div>
            </div>
            <div className="item-container">
                  <img src={iconBullet} alt="" />
              <div className="text-container">
            <h1>Empower home kitchens</h1>
            <p>When you control what goes into your meals, you control how you feel. 
              Every recipe is built around unrefined ingredients and ready in about 
              half an hour of active prep.
            </p>
            </div>
            </div>
            <div className="item-container">
              <img src={iconBullet} alt="" />
              <div className="text-container">
            <h1>Make healthy look good</h1>
            <p>High-resolution imagery shows you exactly what success looks
               like—because we eat with our eyes first, and confidence matters.
            </p>
            </div>
            </div>
            <div className="item-container">
              <img src={iconBullet} alt="" />
              <div className="text-container">
            <h1>Our food philosophy Whole ingredients first.</h1>
            <p>Fresh produce, grains, legumes, herbs, and quality
               fats form the backbone of every recipe.
            </p>
            </div>
            </div>
          </div>

          <div className="call-to-action">
            <img src={beyondPlate} alt="" />
            <Link to='/recipe'>
            <div className="btn-btn">
              <button>Browse recipes</button>
            </div>
            </Link>
          </div>
    </div>
  );
};

export default About;
