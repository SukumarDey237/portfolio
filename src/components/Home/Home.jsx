import React from "react";
import "./home.css";
import MyModel from "./MyModel";

const Home = () => {
  return (
    <>
      <div className="section home row" id="home">
        <div className="home-left col-lg-6">
          <div className="header">
            Hi, I am
            <div className="name">Sukumar dey</div>
          </div>
          <a
            href="static/SUKUMAR DEY resume.pdf"
            className="cv btn btn-outline-light"
            download
          >
            Download C.V.
          </a>
        </div>
        <div className="home-right col-lg-6 p-0">
          <MyModel />
        </div>
      </div>
    </>
  );
};

export default Home;
