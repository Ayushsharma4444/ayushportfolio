import React from "react";
import "./banner.css";
import pic from "../../images/Removal-200.png";
import {Link}  from 'react-router-dom'

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="left-banner">
        {/* <div>
          <small> WELCOME TO MY WORLD</small>
          <h1>Hi, I'm Software Engineer</h1>
        </div> */}
        <div className="desc">
        <div>
          <small> WELCOME TO MY WORLD</small>
          <h1 style={{fontSize:'3rem'}}>Hi, I'm Software Engineer</h1>
        </div>
          <span>
            Passionate software developer with expertise in full-stack
            development. Skilled in designing and implementing robust software
            solutions, leveraging the latest technologies. Committed to
            delivering high-quality code and driving innovation. Strong
            problem-solving and collaboration abilities. Eager to contribute to
            impactful projects and collaborate with talented teams.
          </span>
        </div>
        <div className="explore-button">
          <Link to="/About"><button>Explore More</button></Link>
        </div>
        
      </div>

      <div className="image-banner">
        <div className="image-pic">
        <img src={pic}/>
      
        </div>
      </div>
    </div>
  );
};

export default Banner;
