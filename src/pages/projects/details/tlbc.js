import React from "react";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";

import tlbc_tech from "../../../assests/images/tlbc_tech.pdf";
import tlbc_user from "../../../assests/images/tlbc_user.pdf";
import tlbc_figma from "../../../assests/images/tlbc_figma.pdf";
import tlbc_gif from "../../../assests/images/tlbc.gif";

import "../Projects.css";
import { style } from "glamor";

function TLBC(props) {
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
          <h1 className="projects-heading-text" style={{ color: theme.text }}>
            Audio Space Accumulator
          </h1>
          <div className="projects-heading-div">
            <div>
              <p
                className="projects-header-detail-text subTitle"
                align="left"
                style={{ color: theme.secondaryText }}
              >
                Hello. As a member of a small team, I had the opportunity to
                work on a project for Bobby Umar and his team at the Thought
                Leadership Branding Club. The goal of the project was to create
                an MVP that would allow users to easily access and evaluate
                audio events from various social audio platforms. In order to
                achieve this, we utilized React, MongoDB, and Django to develop
                a system that would collect audio events and present them to the
                user in a organized manner, enabling them to make informed
                decisions about which events to attend. I was responsible for
                contributing to the design and implementation of this system,
                and I am pleased to have been able to contribute to the success
                of this project. <br />
                <br />
                Attached below is the documentation for the project, which
                includes the technical documentation, user documentation, and
                the figma prototype created for the maintenance and off-boarding
                of the project.
                <br />
                <br />
                Further, if you would like to access the project, you can do so
                by clicking{" "}
                <a href="https://stark-brook-84016.herokuapp.com/">here</a>.
                <br />
                <br />
                <img src={tlbc_gif} width="100%" />
              </p>
            </div>
          </div>
          <h1> Documentation </h1>
          <div className="projects-heading-div">
            <div className="projects-heading-text-div">
              <iframe src={tlbc_tech} height="700px" width="100%">
                tlbc tech documentation
              </iframe>
            </div>
            <div className="projects-heading-text-div">
              <iframe src={tlbc_user} height="700px%" width="100%">
                tlbc user documentation
              </iframe>
            </div>
            <div className="projects-heading-text-div">
              <iframe src={tlbc_figma} height="700px%" width="100%">
                tlbc figma documentation
              </iframe>
            </div>
          </div>
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

export default TLBC;
