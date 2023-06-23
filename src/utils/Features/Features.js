import React from "react";
import "./features.css";

const Features = () => {
  return (
    <div>
      <div className="features-container">
        <div className="features">
          {/* <span>FEATURES</span> */}
          <h1>What I Do</h1>
        </div>
        <div className="box-container">
          <div className="box">
            <span>UI/UX Developer</span>
            <br />
            <div style={{ padding: "1rem" }}>
              <small>
                My journey as a UI/UX developer has allowed me to merge
                creativity with technical expertise, enabling me to design
                intuitive and visually appealing interfaces that truly engage
                users. I thrive on understanding the unique needs and
                preferences of users, conducting thorough research, and
                translating those insights into seamless interactions and
                designs.
                <br />
              </small>
            </div>
          </div>
          <div className="box">
            <span>Backend Developer</span>
            <br />
            <div style={{ padding: "1rem" }}>
              <small>
                As a backend developer, your primary focus is on building and
                maintaining the server-side components of web applications,
                software, or other digital products. You work on the
                behind-the-scenes functionality that powers the user interface
                and ensures smooth data processing and communication between
                various system components. Here's an introduction you can use.
              </small>
            </div>
          </div>
          <div className="box">
            <span> MERN Development</span>
            <br />
            <small>
              As a MERN developer, I am well-versed in the entire development
              stack, allowing me to seamlessly work on both the front-end and
              back-end aspects of a project. I have a strong understanding of
              database management using MongoDB. On the server side, I leverage
              Node.js and Express.js to build RESTful APIs and ensure smooth
              communication between the front-end and back-end components. I am
              experienced in creating scalable server architectures and
              optimizing API performance.
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
