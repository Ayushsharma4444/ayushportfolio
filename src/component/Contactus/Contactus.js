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

        // <div className="form">
        //   <div className="form_image">
        //     <img src={pic} />
        //   </div>
        //   <div className="form-input py-4">
        //     {/* <!-- Container for demo purpose --> */}
        //     <div class="container " style={{width:'100%'}}>
        //       {/* <!-- Section: Design Block --> */}
        //       <section class="mb-32 text-center text-gray-800">
        //         <div class="max-w-[700px]  px-3 lg:px-6">
        //           <form>
        //             <div class="form-group mb-6">
        //               <input
        //               name="name"
        //                 type="text"
        //                 class="  form-control block
        //     w-full
        //     px-3
        //     py-1.5
        //     text-base
        //     font-normal
        //     text-gray-700
        //     bg-black bg-clip-padding
        //     border border-solid border-gray-200
        //     rounded
        //     transition
        //     ease-in-out
        //     m-0
        //     focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        //                 id="exampleInput7"
        //                 placeholder="Enter your Name"
        //               />
        //             </div>
        //             <div class="form-group mb-6">
        //               <input
        //                 type="email"
        //                 class="form-control block
        //     w-full
        //     px-3
        //     py-1.5
        //     text-base
        //     font-normal
        //     text-gray-700
        //     bg-black bg-clip-padding
        //     border border-solid border-gray-300
        //     rounded
        //     transition
        //     ease-in-out
        //     m-0
        //     focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        //                 id="exampleInput8"
        //                 placeholder="Enter your email "
        //               />
        //             </div>
        //             <div class="form-group mb-6">
        //               <textarea
        //                 class="
        //     form-control
        //     block
        //     w-full
        //     px-3
        //     py-1.5
        //     text-base
        //     font-normal
        //     text-gray-700
        //     bg-black bg-clip-padding
        //     border border-solid border-gray-300
        //     rounded
        //     transition
        //     ease-in-out
        //     m-0
        //     focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        //   "
        //                 id="exampleFormControlTextarea13"
        //                 rows="3"
        //                 placeholder=" Enter your message"
        //               ></textarea>
        //             </div>
        //             {/* <div class="form-group form-check text-center mb-6"> */}

        //             <button
        //               type="submit"
        //               class="
        //   w-1/3
        //   px-6
        //   py-2.5
        //   bg-yellow-600
        //   text-white
        //   font-medium
        //   text-xs
        //   leading-tight
        //   uppercase
        //   rounded
        //   shadow-md
        //   hover:bg-#c48f56-700 hover:shadow-lg
        //   focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
        //   active:bg-blue-800 active:shadow-lg
        //   transition
        //   duration-150
        //   ease-in-out"
        //             >
        //               Send
        //             </button>
        //           </form>
        //         </div>
        //       </section>
        //       {/* <!-- Section: Design Block --> */}
        //     </div>
            {/* <!-- Container for demo purpose --> */}
        //   </div>
        // </div>
      </div>
      <Footer/>
    </>
  );
};

export default Contactus;
