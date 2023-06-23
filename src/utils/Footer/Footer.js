import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import { BsLinkedin } from "react-icons/bs";
import logo from '../../images/imggg.png'

const Footer = () => {
  return (
    <>
      <hr />
      <div className="footer-container">
      <div>
        <img src={logo} width={150}/>
      </div>
        <div className="first-footer">
          <div className="findme">
            <span>Find me Here..</span>
            <p style={{fontSize:'12px',color:'white'}}>Hey, These are my social <br/>links , Follow me and contact<br/> me throw these links.</p>
          </div>
          <br />
          <div className="social-media-button">
            <div className="linkedIn">
              <a href="https://www.linkedin.com/in/ayush-sharma-b64187182/">
                <img src="https://www.edigitalagency.com.au/wp-content/uploads/Linkedin-logo-png.png" />
              </a>
            </div>
            <div className="instagram">
              {" "}
              <a href="https://www.instagram.com/theayushsharma1/">
                <img src="https://e0.pxfuel.com/wallpapers/422/420/desktop-wallpaper-hq-instagram-png-transparent-instagram-png-instagram-logo-thumbnail.jpg" />
              </a>
            </div>
            <div className="github">
              {" "}
              <a href="https://github.com/Ayushsharma4444">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNIdFvY3SerXZMaEp4a5RJqLH_bchWTbLSSA&usqp=CAU" />
              </a>
            </div>
          </div>
        </div>
        <div className="findme">
          <span>Important Links</span>
          <div>
            <ul style={{fontSize:'1rem',listStyle:'none'}}>
              <Link to="/Home" style={{ textDecoration: "none" }}>
                <li style={{ color: "white" }}> Home</li>
              </Link>
              <Link to="/About" style={{ textDecoration: "none" }}>
                <li style={{ color: "white" }}>About</li>
              </Link>
              <Link to="/Projects" style={{ textDecoration: "none" }}>
                <li style={{ color: "white" }}>Projects</li>
              </Link>
              <Link to="/Contactus" style={{ textDecoration: "none" }}>
                <li style={{ color: "white" }}>Contactus</li>
              </Link>
            </ul>
          </div>
        </div>
        {/* <div className="social-media-button">
                <div><span>Find me Here..</span></div>
                <div><BsLinkedin color='blue'/><a href=''>LinkedIn</a></div>
                <div>  <BsLinkedin color='blue'/><a href=''>Instagram</a></div>
                <div> <BsLinkedin color='blue'/><a href=''>Github</a></div>
            </div> */}
      </div>
    </>
  );
};

export default Footer;
