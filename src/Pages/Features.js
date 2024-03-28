import React from "react";
import Feature from "../Images/featuremobile.png";
import "../Style/Features.css";
import Data from "../Data/Data";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Features = () => {
  return (
    <div>
      <div className="container mt-2">
        
        <div className="start_head">
        <h5
          data-aos="zoom-in-right"
          data-aos-duration="2000"
          className="Features_space">
           Features
        </h5>
          <h1 data-aos="zoom-in-right" data-aos-duration="2000">
            App Overview
          </h1>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 start_para">
        <div>
          <p data-aos="zoom-in-left" data-aos-duration="2000">
            The first travel app that utilizes a revolutionary map to track your
            epic adventures!   VAGABOND’s features include a customizable world
            map, a bucket list, trip tracking, photo organizer.
          </p>
        </div>
        </div>
        <div className="row ">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4">
            {Data.sacion.map((item, index) => (
              <div class="row g-0" key={index}>
                <div class="col-md-2 icon-alignment">
                  <div className="icon-style">
                    <img src={item.image} class="img-fluid" alt="..." />
                  </div>
                </div>
                <div class="col-md-10">
                  <div class="card-body ">
                    <h5
                      class="search_engine">
                      {item.title}
                    </h5>
                    <p
                      class="card-text search_paragraph" >
                      {item.paragraph}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-12 col-xl-4 feature-image">
            <div className="start_img">
              <img
                src={Feature}
                className="img-fluid"
                alt="switch"
                loading="lazy"
              />
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 feature-responsive">
            {Data.rightsaction.map((item, index) => (
              <div class="row g-0" key={index}>
                <div class="col-md-10 icon-alignment">
                  <div class="card-body">
                    <h5
                      class="right_head"
                    >
                      {item.title}
                    </h5>
                    <p
                      class="right_para"
                    >
                   {item.paragraph}
                    </p>
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
