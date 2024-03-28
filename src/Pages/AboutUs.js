import React from "react";
import Rectanglefive from "../Images/789.png";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SlSocialTwitter } from "react-icons/sl";
import "../Style/About.css";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const AboutUs = () => {
  return (
    <section>
      <div className="container  about-top">
        <div className="row p-0">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-7 mb-3">
            <div className="app_service_card_1">
              <div className="app_service_car_head">
                <h3
                  data-aos="zoom-in-right"
                  data-aos-duration="2000"
                  className="Expert_heading">
                  About Us
                </h3>
                <h1
                  data-aos="zoom-out-down"
                  data-aos-duration="2000"
                  className="Sub_heading">
                  Have bindle will travel.
                </h1>
                <div className="app_service_para_img">
                  <div className="app_service_card_para">
                    <p data-aos="zoom-out-down" data-aos-duration="2000">
                      The first travel app that utilizes a revolutionary map to
                      track your epic adventures!   VAGABOND’s features include
                      a customizable world map, a bucket list, trip tracking,
                      photo organizer, and the ability to connect with other
                      VAGABONDs.
                    </p>
                  </div>
                </div>
                <div className="social-media">
                  <div className="social-icon">
                    <FaFacebookF/>
                  </div>
                  <div className="social-icon">
                    <FaInstagram/>
                  </div>
                  <div className="social-icon">
                    <SlSocialTwitter/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-5 About-image">
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
  );
};

export default AboutUs;
