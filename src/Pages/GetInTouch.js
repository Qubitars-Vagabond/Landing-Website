import React from "react";
import "../Style/GetInTouch.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { Ri24HoursFill } from "react-icons/ri";
import { withFormik } from "formik";
import * as Yup from "yup";
import Field from "../Common/Field";

const fields = {
  sections: [
    [
      {
        name: "name",
        elementName: "input",
        type: "text",
        placeholder: "Your name",
      },
      {
        name: "email",
        elementName: "input",
        type: "email",
        placeholder: "Your email",
      },
      {
        name: "phone",
        elementName: "input",
        type: "text",
        placeholder: "Your phone",
      },
      {
        name: "phone2",
        elementName: "input",
        type: "text",
        placeholder: "Your issue",
      },
    ],
  ],
};

const GetInTouch = (props) => {
  return (
    <div>
      <div className="container-fluid ">
        <div className="row p-0">
          <div className="col-xs-12 col-sm-6 col-md-12 col-lg-7 col-xl-8 Gotouch-hero">
            <h1
              className="Touch-head"
              data-aos="zoom-in-right"
              data-aos-duration="2000"
            >
              Get in Touch
            </h1>
            <form className="contact-section" onSubmit={props.handleSubmit}>
              <div
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                {fields.sections.map((section, sectionIndex) => {
                  return (
                    <div className="row p-0" key={sectionIndex}>
                      {section.map((field, fieldIndex) => (
                        <div className="col-md-6" key={fieldIndex}>
                          <Field
                            {...field}
                            name={field.name}
                            value={props.values[field.name]}
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            touched={props.touched[field.name]}
                            errors={props.errors[field.name]}
                          />
                        </div>
                      ))}
                    </div>
                  );
                })}
             
                  <div className="row">
                    <div className="col-md-12">
                      <textarea
                        className="contact-form-text"
                        name="YourFieldName"
                        placeholder="Your Placeholder Text"
                        rows="4" cols="50"
                        required
                      ></textarea>
                    </div>
                  </div>

                <button className="submit-button">Send message</button>
              </div>
            </form>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5 col-xl-4 benifit_card_hero Responsive_card_hero rightdiv-hero">
            <div className="benifit_card">
              <div className="main-saction">
                <MdOutlineEmail className="icon-contact" />
                <p className="contact-text">info@vagabond.com.</p>
              </div>
              <br />
              <div className="main-saction">
                <MdOutlineEmail className="icon-contact" />
                <p className="contact-text">info@vagabond.com.</p>
              </div>
              <br />
              <div className="main-saction">
                <FaPhoneAlt className="icon-contact" />
                <p className="contact-text">+1 304 303 46.</p>
              </div>
              <br />
              <div className="main-saction">
                <Ri24HoursFill className="icon-contact" />
                <p className="contact-text">24 Hours Service</p>
              </div>
              <div className="benifit_card_corner"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withFormik({
  mapPropsToValues: () => ({
    name: "",
    email: "",
    phone: "",
    phone2: "",
    message: "",
  }),
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .min(3, "Come on bro, your name is longer than that.")
      .required("You must give us your name"),
    email: Yup.string()
      .email("You need to give us a valid email.")
      .required("You need your email."),
    phone: Yup.string()
      .min(10, "Please provide your 10 digit phone number")
      .required("You need your phone number.")
      .max(15, "Your phone number is too long"),
    phone2: Yup.string()
      .min(10, "Please provide your 10 digit phone number")
      .required("You need your phone number.")
      .max(15, "Your phone number is too long"),
    message: Yup.string()
      .min(500, "Please provide at least 500 characters")
      .required("You need your phone number."),
  }),

  handleSubmit: (values, { setSubmitting }) => {
    // Handle form submission here
    alert("Form submitted. Thank you very much!");
    // If using async actions, remember to call setSubmitting(false) when done
    setSubmitting(false);
  },
})(GetInTouch);
