import React from "react";
import "./projects.css";
import AliceCarousel from "react-alice-carousel";

const Projects = () => {
  const projectList = [
    {
      name: "Smash Zombie",
      img: "static/img/smash-zombie.jpeg",
      desc: "Smack zombie is a simple and easy to play game with three difficulty levels, inspired by the popular carnival game wack a mole. You have to hit the zombie before it disappears from the screen and try to obtain a perfect score of 100.",
      git: "https://github.com/SukumarDey237/smash-zombie",
      site: "https://sd23-smashzombie.netlify.app/",
    },
    {
      name: "Best Deals",
      img: "static/img/best-deals.jpeg",
      desc: "Best deals is a simple and responsive e-commerce store frontend built with help of react. It has many features like displaying the products, sorting the products, adding and removing products from cart, a wishlist page, etc.",
      git: "https://github.com/SukumarDey237/e-commerce",
      site: "https://sd23-bestdeals.netlify.app",
    },
    {
      name: "Budgets",
      img: "static/img/budgets.jpeg",
      desc: "Budgets is a simple, easy-to-use budgeting app that helps you track your spending and manage your budget. With budget tracker, you can create budgets for all of your expenses and track your progress over time.",
      git: "https://github.com/SukumarDey237/budget-app",
      site: "https://sd23-budgetsmanager.netlify.app",
    },
    {
      name: "Crypto Tracker",
      img: "static/img/crypto-tracker.jpeg",
      desc: "Crypto tracker is a cryptocurrency tracker that enables users to follow the price fluctuation of their cryptos. Have features like responsive carousel, ability to change price between INR and USD, chart of price changes of crypto, etc.",
      git: "https://github.com/SukumarDey237/crypto-tracker",
    },
  ];

  const items = projectList.map((p) => {
    return (
      <div className="mx-0 mx-md-2 project border">
        <div className="d-flex align-items-center justify-content-center">
          <img src={p.img} alt={p.name} className="p-img border shadow" />
        </div>
        <div className="p-text">
          <div className="p-name fs-3 fw-bold px-2">{p.name}</div>
          <div className="p-desc p-2 my-1">{p.desc}</div>
          <div className="p-btns md-d-flex">
            {p.site && (
              <a
                href={p.site}
                target="_blank"
                className="btn btn-outline-dark fw-bold text-center mx-2 my-1"
              >
                live site
              </a>
            )}
            <a
              href={p.git}
              target="_blank"
              className="btn btn-outline-dark fw-bold text-center mx-2 my-1"
            >
              Github repo
            </a>
          </div>
        </div>
      </div>
    );
  });

  const responsive = {
    0: {
      items: 1,
    },
    481: {
      items: 2,
    },
    1025: {
      items: 3,
    },
  };

  return (
    <div className="section projects border" id="projects">
      <div className="title"> projects</div>
      <AliceCarousel
        mouseTracking
        infinite
        disableButtonsControls
        autoPlayInterval={8000}
        animationDuration={1000}
        responsive={responsive}
        items={items}
        autoPlay
      />
    </div>
  );
};

export default Projects;
