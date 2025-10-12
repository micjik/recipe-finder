import React from "react";
import homeRealLife from "../../assets/images/image-home-real-life-large.webp";


import "./Section.css";
const Section = () => {
  return (
    <>
      <div className="main-top">
        <div className="main-left">
          <h2>Built for real life</h2>
          <p className="main-des">
            Cooking shouldn't be complicated.These recipes come in under
            <span> 30 minutes </span>
            of active time, fit busy schedules, and taste good enough to repeat.
          </p>
          <p>
            Whether you are new to the kitchen or just need fresh ideas, we've
            got you covered
          </p>
        </div>
        <div className="main-right">
          <img src={homeRealLife} alt="image home real life" />
        </div>
      </div>
      <div className="main-bottom">
        
        <div className="menu-description">
           <h3>Ready to cook smarter?</h3>
           <p>Hit the Button, pick a recipe, and get dinner on the table--fast</p>
          <button>Browse recipe</button>
        </div>
        
      </div>
      
    </>
  );
};

export default Section;
