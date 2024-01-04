import React from "react";
import "./contact.css";
import Navbar from "../Navbar/Navbar";
import { AiFillPhone } from "react-icons/ai";
import { FaMailBulk } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";
import Footer from '../../utils/Footer/Footer';
import pic from '../../images/Removal-602.png'
import emailjs from '@emailjs/browser';
// import Getintouch from '../../utils/getintouch/Getintouch'
const Contactus = () => {


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_68afho1', 'YOUR_TEMPLATE_ID',  '5E_L_0FHgJy4pwcGv')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <>
      <Navbar />
      <div className="contactus py-4">
        <div className="contact-heading py-4">
          <h1>
            Contact <span>Us.</span>
          </h1>
        </div>
        <div className="dial-container">
          <div className="phone-container">
            <div className="phone-box">
              <AiFillPhone color="white" width={150} />
            </div>
            <div className="phone-number">
              <h2>+917300926213</h2>
            </div>
            <div className="phone-text">
              This is not my calling number, reached out to me through the whatsapp.
            </div>
          </div>
          <div className="phone-container">
            <div className="phone-box">
              <FaMailBulk color="white" width={150} />
            </div>
            <div className="phone-number">
              <h2>ayushsharma81852@gmail.com</h2>
            </div>
            <div className="phone-text">
              For contacting me through this mail, I will contact you back as soon as possible.
            </div>
          </div>
          <div className="phone-container">
            <div className="phone-box">
              <FaAddressBook color="white"/>
            </div>
            <div className="phone-number">
              <h2>New Delhi </h2>
            </div>
            <div className="phone-text">
              I am Software Engineer, working in Delhi NCR . This is my official Address.
            </div>
          </div>
        </div>

        <div className="form">
          <div className="form_image">
            <img src={pic} />
          </div>
          <div className="form-input py-4">
            {/* <!-- Container for demo purpose --> */}
           
            {/* <!-- Container for demo purpose --> */}
           </div>
         </div>
      </div>
      <Footer/>
    </>
  );
};

export default Contactus;
