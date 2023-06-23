import React from "react";
import "./about.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../../utils/Footer/Footer";
// import img6 from "../../images/Removal-602.png";
import img6 from "../../images/Removal-200.png";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-container">
        <div className="leftAbout">
          <div className="left_about_img">
            {/* <h1>1.</h1> */}
            <img src={img6}  style={{width:'75%'}}/>
          </div>
        </div>
        <div className="rightAbout" style={{width:'500px'}}>
          <span>
            Hello! My name is <b>Ayush Sharma</b>. I am currently pursuing my
            engineering degree with a focus on Computer Science and Engineering,
            From <b>Future Institute Of Engineering, Bareilly.</b>. I have a
            strong passion for software development and programming, which has
            led me to become a skilled software developer alongside my studies.
            I enjoy utilizing my technical skills to solve real-world problems
            and create innovative solutions. With a solid foundation in
            engineering principles and expertise in various programming
            languages and frameworks, I strive to bridge the gap between
            technology and practical applications. I am constantly seeking
            opportunities to learn and grow, both academically and
            professionally, to make a positive impact in the field of software
            development.
          </span>
        </div>
      </div>

      <div className="downAbout">
      <div className="downAbout-1">
        <div className="personal-details">
          <h1>Personal Details</h1>
          <div style={{margin:'0 0 0 4rem' , listStyle:'none' ,color:'skyblue',fontSize:'1rem' ,fontWeight:'400'}}>
            <li style={{listStyle:'none'}}>Name :-{"  "} Ayush Sharma</li>
            <li style={{listStyle:'none'}}> Email: ayushsharma81852@gmail.com</li>
            <li style={{listStyle:'none'}}> Mo.No. : 6395192426</li>
            <li style={{listStyle:'none'}}>Linked In : <a href="https://www.linkedin.com/in/ayush-sharma-b64187182/">https://www.linkedin.com/in/ayush-sharma-b64187182/</a></li>
            
          </div>
        </div>
        <div className="education">
          <h1>Educational Details</h1>
          <div className="education-details">
            <div className="btech-container">
              <span>
                Future Institute of Engineering and Technology, Bareilly
              </span>
              <br />
              <small>Computer Science and Engineering</small>
              <br />
              <small>
                <b>2022-2025</b>
              </small>
            </div>
            <br />
            <div className="polytechnic">
              <span>
                Government Polytechnic College Roorkee, Baheri, Bareilly
              </span>
              <br />
              <small>Computer Science and Engineering</small>
              <br />
              <small>
                <b>2018-2021</b>
              </small>
            </div>
          </div>
        </div>

        </div>

        <div className="downAbout-2">
        <div className="roles">
          <h1>Roles</h1>
          <div className="roles-container">
            <li>Web Development</li>
            <li>UI/UX Development</li>
            <li>Backend Development</li>
            <li>FrontEnd Development</li>
          </div>
        </div>
        <div className="achievement">
            <h1>Achievement</h1>
            <div style={{margin:"0 0 0 4rem " , color:'skyblue'}}>
                <li>Grabbed A+ Grade Score in <b>TCS NQT FEB 2021</b></li>
                <li>Getting 256 Rank on <b>Newton School Coding Challenge</b></li>
                <li>Getting <b>4+ Star</b> Rating in <b>Java</b> on HackerRank</li>
            </div>
        </div>
        </div>
        <div className="downAbout-3">

        
        <div className="interest">
          <h1>Interest</h1>
          <div className="interest-container">
            <li>Gaming</li>
            <li>Music</li>
            <li>Travelling</li>
          </div>
        </div>

        

        </div>
        
      </div>
      <Footer />
    </>
  );
};

export default About;
