import React from "react";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";

import "../Projects.css";
import { style } from "glamor";
import { Fade } from "react-reveal";

import pytorch from "../../../assests/images/pytorch.gif";

function Xaxxon(props) {
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
            Autocrawler Robot
          </h1>
          <div className="projects-heading-div">
            <div>
              <h3> Manufacturing </h3>
              <p
                className="projects-header-detail-text subTitle"
                align="left"
                style={{ color: theme.secondaryText }}
              >
                I've always been interested in robotics, automation, and
                programming, and I was fortunate enough to have the opportunity
                to work with Xaxxon Technologies in late 2020 who create open
                source robotics. At first, I was only able to do basic tasks
                such as cleaning out their storage space, but over time, I was
                able to help with building their Autocrawler Robot.
                <br></br>
                <br></br>I was able to assist with tasks such as soldering
                electronic components, cutting the robot's chassis, machining
                specialized parts on the CNC mill, and 3D printing parts of the
                robot which all required attention to detail.
                <br></br>
                <br></br>
                One of the interesting things about this experience was getting
                to see the blueprints and plans for the robot. This gave me a
                better understanding of how all the different parts fit together
                to make the robot work. However, I must acknowledge that I was
                only able to contribute a small part in the grand scheme of
                things, and the real credit goes to Xaxxon Technologies who were
                able to design and develop such an advanced robot.
                <br></br>
                <br></br>
                This experience was a great learning opportunity for me, and I
                am grateful for the chance to work with such advanced technology
                and to apply my knowledge and skills in a real-world setting. I
                realize that I still have a lot to learn and I am eager to
                continue developing my skills and knowledge in the field of
                robotics and automation in the future.
              </p>
              <div className="video-container">
                <iframe
                  height="80%"
                  width="80%"
                  src="https://www.youtube.com/embed/4B881DaBZA0"
                  title="Autocrawler Robot"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <h3> Software </h3>

              <p
                className="projects-header-detail-text subTitle"
                align="left"
                style={{ color: theme.secondaryText }}
              >
                During the summer of 2022, I had the opportunity to intern at{" "}
                <a href="https://www.scansonic.de/en/">Scansonic</a>, a company
                within the Berlin Industrial Group that develops laser
                processing and sensor systems for automated joining in modern
                manufacturing processes. While there, I worked with the Sceye
                team, which focuses on the visual processing systems of welding
                robots. My responsibilities included assisting with the training
                of a deep learning model to accurately detect weld defects in
                manufacturing environments. (timestamp 2:00 onwards in the
                following video)
              </p>

              <img
                src={pytorch}
                alt="pytorch"
                className="pytorch"
                width="60%"
              />

              <p
                className="projects-header-detail-text subTitle"
                align="left"
                style={{ color: theme.secondaryText }}
              ></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Xaxxon;
