import React from "react";
import "./skills.css";

const skillList = [
  { icon: "static/icons/html.png", name: "HTML 5" },
  { icon: "static/icons/css.png", name: "CSS 3" },
  { icon: "static/icons/bootstrap.png", name: "Bootstrap" },
  { icon: "static/icons/javascript.png", name: "Javascript" },
  { icon: "static/icons/react.png", name: "React" },
  { icon: "static/icons/redux.png", name: "Redux" },
  { icon: "static/icons/react-router.png", name: "React router" },
  { icon: "static/icons/three.png", name: "Three.JS" },
  { icon: "static/icons/python.png", name: "Python" },
  { icon: "static/icons/git.png", name: "Git" },
  { icon: "static/icons/github.png", name: "Github" },
  { icon: "static/icons/vs-code.png", name: "VS code" },
];

const Skills = () => {
  return (
    <div className="section skills" id="skills">
      <div className="title">Skills</div>
      <div className="row skill-grid">
        {skillList.map((i) => {
          return (
            <div className=" col-6 col-lg-4" key={i.name}>
              <div className="pill row">
                <img className="icon col-12 col-md-6 m-auto" src={i.icon} alt={i.name} />
                <div className="txt col-12 col-md-6">{i.name}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
