import React from "react";
import "../Style/GetInTouch.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Mailicon from '../Images/mail.png'

export const GetInTouch = () => {
  return (
    <div>
      <div className="container mt-5 mb-4">
        <div className="row">
          <div className="col-md-6">
            <h1  className="Touch-head" data-aos="zoom-in-right" data-aos-duration="2000">
              Get in Touch
            </h1>
            <p className="Touch-para" data-aos="zoom-in-left" data-aos-duration="2000">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo con Ut enim ad minim
            </p>
            <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <input
                      name="name"
                      type="text"
                      className="contact-form-text"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="phone"
                      name="Your Phone"
                      className="contact-form-text"
                      placeholder="Your Phone"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <input
                      type="email"
                      name="Email Address"
                      className="contact-form-text"
                      placeholder="Email Address"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="name"
                      name="Issue Topic"
                      className="contact-form-text"
                      placeholder="Issue Topic"
                      required
                    />
                  </div>
                </div>
              </div>

              <textarea
                name="message"
                className="contact-form-text"
                placeholder="Describe Your issue here"
              ></textarea>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <div class="card contact-us-left">

            <div class="row g-0">
                <div class="col-md-2">
                    <div className="icon-style">
                <img src={Mailicon} class="img-fluid" alt="..." />
                  </div>
                </div>
                <div class="col-md-10">
                  <div class="card-body p-2">
                 
                    <p
                    class="card-text">info@vagabond.com.</p>
                  </div>
                </div>
              </div>
               <br/>
              <div class="row g-0">
                <div class="col-md-2">
                    <div className="icon-style">
                <img src={Mailicon} class="img-fluid" alt="..." />
                  </div>
                </div>
                <div class="col-md-10">
                  <div class="card-body p-2">
                 
                    <p
                    class="card-text">hr@vagabond.com</p>
                  </div>
                </div>
              </div>
              <br/>
              <div class="row g-0">
                <div class="col-md-2">
                    <div className="icon-style">
                <img src={Mailicon} class="img-fluid" alt="..." />
                  </div>
                </div>
                <div class="col-md-10">
                  <div class="card-body p-2">
                 
                    <p
                    class="card-text">+1 304 303 46.</p>
                  </div>
                </div>
              </div>
              <br/>
              <div class="row g-0">
                <div class="col-md-2">
                    <div className="icon-style">
                <img src={Mailicon} class="img-fluid" alt="..." />
                  </div>
                </div>
                <div class="col-md-10">
                  <div class="card-body p-2">
                 
                    <p
                    class="card-text">24 Hours Service</p>
                  </div>
                </div>
              </div>
              

          
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
