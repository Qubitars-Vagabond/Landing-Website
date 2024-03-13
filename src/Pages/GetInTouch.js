import React from "react";
import "../Style/GetInTouch.css";

export const GetInTouch = () => {
  return (
    <div>
      <div className="container mt-5 mb-4">
        <div className="row">
          <div className="col-md-6">
            <h1>Get in Touch</h1>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo con Ut enim ad minim
            </p>
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
          <div className="col-md-6 ">
            <div className="contact-us-left">
              <p className="paragrapgh">
                4035 Heavens,
                <br />
                Los Angeles, California
              </p>

              <p className="paragrapgh">+000 313 577 111</p>
              <p className="paragrapgh">+000 313 577 222</p>

              <p className="paragrapgh">info@example.com</p>
              <p className="paragrapgh">support@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
