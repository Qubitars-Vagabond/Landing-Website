import React from "react";
import Feature from "../Images/featuremobile.png";
import "../Style/Features.css";
import Data from "../Data/Data";
import AOS from "aos";
import 'aos/dist/aos.css'
AOS.init();


const Features = () => {
  return (
    <div>
      <div className="container mt-5">
        <div className="start_head">
          <h1
            data-aos="zoom-in-right"
            data-aos-duration="2000"
          >App Overview</h1>
        </div>
        <div className="start_para">
          <p
           data-aos="zoom-in-left" 
           data-aos-duration="2000"
          >
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo con Ut enim ad minim
          </p>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
            {Data.map((item, index) => (
              <div class="row g-0">
                <div class="col-md-2   mt-4">
                    <div className="icon-style">
                <img src={item.image} class="img-fluid" alt="..." />
                  </div>
                </div>
                <div class="col-md-10">
                  <div class="card-body p-2">
                    <h5
                     data-aos="zoom-in-right" 
                     data-aos-duration="2000"
                    class="search_engine">{item.title}</h5>
                    <p
                     data-aos="zoom-out-down"
                     data-aos-duration="2000"
                    class="card-text">{item.paragraph}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-4">
            <div className="start_img">
              <img
                src={Feature}
                className="img-fluid"
                alt="switch"
                loading="lazy"
              />
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-4">
            {Data.map((item, index) => (
              <div class="row g-0">
                <div class="col-md-10">
                  <div class="card-body p-2">
                    <h5 
                     data-aos="zoom-in-right" 
                     data-aos-duration="2000"
                    class="right_head">{item.title}</h5>
                    <p 
                     data-aos="zoom-out-down"
                     data-aos-duration="2000"
                    class="right_para">{item.paragraph}</p>
                  </div>
                </div>
                <div class="col-md-2 mt-4">
                <div className="icon-style">
                  <img src={item.image} class="img-fluid" alt="..." />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
