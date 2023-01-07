import React from "react";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";

import "../Projects.css";
import { style } from "glamor";
import { Fade } from "react-reveal";

import senso1 from "../../../assests/images/SensoUJ1.png";
import senso2 from "../../../assests/images/SensoUJ2.png";
import techStack from "../../../assests/images/SensoTechStack.png";
function Senso(props) {
  const theme = props.theme;

  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  return (
    <>
      <div className="projects-main">
        <Header theme={theme} setTheme={props.setTheme} />
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <h1 className="projects-heading-text" style={{ color: theme.text }}>
              Doing Anything but Linear Algebra
            </h1>
          </Fade>
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-text-div">
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  Hello
                </p>
              </div>
            </div>
          </Fade>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <Footer theme={props.theme} onToggle={props.onToggle} />
    </>
  );
}

export default Senso;
