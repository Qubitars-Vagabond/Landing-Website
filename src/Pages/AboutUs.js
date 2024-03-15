import React from "react";
import Rectanglefive from "../Images/789.png";
import Rectangleone from "../Images/person-icon.png";
import Facebook from '../Images/facebook.png'
import Instragram from '../Images/instragram.png'
import Twitter from '../Images/twiter.png'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SlSocialTwitter } from "react-icons/sl";



import "../Style/About.css";
import AOS from "aos";
import 'aos/dist/aos.css'


AOS.init();



const AboutUs = () => {
  return (
    <section>
      <div className="container  mt-5">
        <div className="row p-0">
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
            <div className="app_service_card_1">
              <div className="app_service_car_head">
                <h3
                  data-aos="zoom-in-right"
                  data-aos-duration="2000"
                  className="Expert_heading">About Us</h3>
                <h1
                  data-aos="zoom-out-down"
                  data-aos-duration="2000"
                  className="Sub_heading">Experience With <br /> Vagabond</h1>
                <div className="app_service_para_img">
                  <div className="app_service_card_para">
                    <p
                      data-aos="zoom-out-down"
                      data-aos-duration="2000"
                    >
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    </p>
                    <p
                      data-aos="zoom-out-down"
                      data-aos-duration="2000"
                    >
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    </p>
                  </div>
                </div>
                <div className="social-media">
                  <div className="social-icon">
                  <FaFacebookF/>
                </div>
                  <div className="social-icon">
                  <FaInstagram />
                </div>
                  <div className="social-icon">
                  <SlSocialTwitter />
                   </div>
            
                </div>
              </div>

            </div>
          </div>

          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-5 About-image">
            
              <img
                src={Rectanglefive}
                className="img-fluid"
                alt="switch"
                loading="lazy"
              />
           
          </div>


        </div>

      </div>

    </section>
  )
}

export default AboutUs
