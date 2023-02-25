import React from "react";
import "./contact.css";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="section contact" id="contact">
      <div className=" row">
        <div className="col-md-6">
          <div className="contact-left">
            <div className="title">Contact me</div>
            <div className="mx-auto contact-message">
              If you have any questions or are interested in getting in touch,
              feel free to email me at dey.sukumar1999@gmail.com or connect with
              me via LinkedIn.
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="contact-right">
            <div className="form-header">send me a mail</div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
