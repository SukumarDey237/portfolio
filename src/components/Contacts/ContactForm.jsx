import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ikr6x7p",
        "template_ypdsvjc",
        form.current,
        "Ec0KXzbrM7juc-foz"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} className="contact-form" onSubmit={sendEmail}>
      <input
        className="text-field"
        type="text"
        placeholder="Name"
        name="user_name"
        required
      />
      <br />
      <input
        className="text-field"
        type="email"
        placeholder="Email"
        name="user_email"
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        required
      />
      <br />
      <textarea
        className="text-field message"
        name="message"
        placeholder="Message"
        required
      />
      <br />
      <input className="submit-btn" type="submit" value="Send" />
    </form>
  );
};

export default ContactForm;
