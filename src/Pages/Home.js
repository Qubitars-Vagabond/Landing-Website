import React, { useState } from "react";
import "../Style/Home.css";
import Rectangle from "../Images/Rectangle 2.png";
import Rectangleone from "../Images/Rectangle 4.png";
import Rectangletwo from "../Images/Group 3411.png";
import Rectanglethree from "../Images/Group 341.png";
import Rectanglefour from "../Images/Group 3400.png";
import Rectanglefive from "../Images/Group 340.png";

export const Home = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="container pt-5">
          <div className="row">
            <div className="col-lg-5">
              <p className="home_style">
                Mapping Journeys, <br /> One Location <br /> at a Time.
              </p>
              <p className="home_stylish">
                Empowering Your Wanderlust by Helping You Curate, Map, and
                Conquer Your Bucket List Destinations.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="d-flex m-auto gap-4">
                <img src={Rectangle} className="img_style"/>
                <img src={Rectangleone} className="img_style"/>
                <img src={Rectangletwo} className="img_style"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
