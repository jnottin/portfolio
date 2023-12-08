import React from "react";
import Typed from "react-typed";
import planet7sVid from "../img/planet_7s.mov";
import planet7sImage from "../img/planet_img.png";
import "./stars.scss";

class Intro extends React.Component {
  render() {
    return (
      // <div id="home" className="intro route">
      <div id="home" className="intro route bg-image">
        {/* <div id="stars" /> */}
        {/* <div id="stars2" /> */}
        {/* <div id="stars3" /> */}

        <div className="video-wrapper">
          <video preload={planet7sImage} id="background-video" autoPlay loop muted>
            <source src={planet7sVid} />
          </video>
        </div>




        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <h1 className="intro-title mb-4">Hiya <span role="img" className="wave">👋</span></h1>
              <h1 className="intro-title mb-4">I'm Sam Nottingham</h1>
              <p className="intro-subtitle">
                <span className="text-slider-items"></span>
                <strong className="text-slider">
                  <Typed
                    strings={[
                      "Software Engineer",
                      "Full Stack Developer",
                      "Site Reliability Engineer",
                      "Back-End Engineer",
                      "DevOps Engineer"
                    ]}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
