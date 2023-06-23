import React from "react";
import "./aboutme.css";
import "../../projects/projects.css";
import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../utils/Footer/Footer";
import img6 from "../../images/Removal-602.png";

const Aboutme = () => {
  return (
    <div className="allprojects">
      <div style={{ textAlign: "center", fontSize: "2rem" }}>
        {" "}
        <h1 style={{ fontSize: "3rem" }}>About Me</h1>
      </div>
     
       
          <div className="resume-about">
            <div className="aboutme-img">
            <img src={img6}/>

            </div>
            <div className="Description">
              <div className="rightAbout">
                <span>
                  Hello! My name is <b>Ayush Sharma</b>. I am currently pursuing
                  my engineering degree with a focus on Computer Science and
                  Engineering, From{" "}
                  <b>Future Institute Of Engineering, Bareilly.</b>. I have a
                  strong passion for software development and programming, which
                  has led me to become a skilled software developer alongside my
                  studies. I enjoy utilizing my technical skills to solve
                  real-world problems and create innovative solutions. With a
                  solid foundation in engineering principles and expertise in
                  various programming languages and frameworks, I strive to
                  bridge the gap between technology and practical applications.
                  I am constantly seeking opportunities to learn and grow, both
                  academically and professionally, to make a positive impact in
                  the field of software development.
                </span>
              </div>
            </div>
            {/* <div className="buttons">
              <button>Get Code</button>
              <button>
                <a>Visit Site</a>
              </button>
            </div> */}
          </div>
        
        <hr />
      
    </div>
  );
};

export default Aboutme;
