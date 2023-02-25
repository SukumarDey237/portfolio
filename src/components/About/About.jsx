import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="section about border" id="about">
      <div className="title">About me</div>
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="about-left">
            <img
              className="about-img mb-4 mb-md-0 shadow"
              src="static/img/me.jpg"
              alt="Sukumar"
            />
          </div>
        </div>
        <div className="col-12 col-md-6 d-flex">
          <div className="about-right">
            <p>
              Hello! I'm Sukumar Dey, I'm a web developer based in
              Chhattisgarh.
            </p>
            <p>
              I've been self-taught in HTML, CSS, JavaScript, Python and now
              mostly use React JS for web development. But I'm also interested
              in learning new frameworks and languages.
            </p>
            <p>
              Currently, I'm looking for opportunities where I can showcase my
              talents and grow as a developer. If you want to talk about working
              together, send me a message!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
