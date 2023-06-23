import React from "react";
import "./projects.css";
import Navbar from "../component/Navbar/Navbar";
import Footer from "../utils/Footer/Footer";

const Projects = () => {
  return (
    <div className="allprojects">
      <Navbar />
      <div className="project-container">
        <div className="resume-builder">
          <div className="resume-image">
            {/* <h1>1.</h1> */}
            <img src="https://www.myresumeformat.com/wp-content/uploads/2018/09/resume-template-free.jpg" />
          </div>
          <div className="resume-about" style={{ width: "550px" }}>
            <div className="heading">
              <span>1. CV/Resume Maker</span>
            </div>
            <div className="description">
              <p>
                This is CV maker website , Here User can build their own CV free
                and able to download it. <br />
                The project involves front-end development using technologies
                like React, Material UI ,React-icons, SCSS etc , along with a
                back-end for storing and retrieving user data. The goal is to
                provide users with a user-friendly interface and customizable
                resume templates to simplify the process of creating a
                professional-looking resume.
              </p>
            </div>

            <div className="buttons">
              {/* <button>Get Code</button> */}
              <a href="https://ayushcvmaker-gynau6h1g-ayushsharma4444.vercel.app/">
                <button>Visit Site</button>
              </a>
            </div>
          </div>
        </div>
        <hr />

        {/*  Second Project........   */}
        <div className="resume-builder">
          <div className="resume-about" style={{ width: "550px" }}>
            <div className="heading">
              <span>2 . Ticket Booking </span>
            </div>
            <div className="description">
              <p>
                This is Ticket Booking website , Here User can Booked their
                ticket and able to download it. 
                This ticket booking website typically includes features such as
                event search, seat selection, secure online payment, booking
                confirmation, ticket delivery, enabling
                users to easily discover, book, and attend various events.it.For making this,  I have used MERN Tech Stack.
                
              </p>
            </div>
            {/* <div className="buttons"> 
                  <button >Get Code</button>
                  <button><a>Visit Site</a></button>
            </div> */}
          </div>
          <div className="resume-image">
            {/* <h1>1.</h1> */}
            <img src="https://previews.123rf.com/images/maxxyustas/maxxyustas1408/maxxyustas140800057/31000101-online-ticket-booking-boarding-pass-on-laptop-keyboard-3d.jpg" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Projects;
