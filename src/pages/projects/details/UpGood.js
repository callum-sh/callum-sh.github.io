import React from "react";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";

import "../Projects.css";
import { style } from "glamor";

function UpGood(props) {
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
          <div className="projects-heading-div">
            <div className="projects-heading-text-div">
              <h1
                className="projects-heading-text"
                style={{ color: theme.text }}
              >
                The UpGood Podcast
              </h1>
              <p
                className="projects-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                While exploring potential internship opportunities, I had the
                privilege of engaging in a series of informative conversations
                with individuals who have previously completed internships, as
                well as employers and industry professionals. These
                conversations provided me with valuable insights and perspective
                on the internship process and the industry as a whole. It
                occurred to me that others may also benefit from this
                information, and I mentioned this to{" "}
                <a href="https://www.linkedin.com/in/christong7/">Chris Tong</a>
                , a former intern at companies that I have always been
                interested in interning for, namely Formlabs and Tesla. He
                agreed, and we decided to create the UpGood podcast as a way to
                share what we have learned about industry integration and the
                process of obtaining an internship with a wider audience.
              </p>
              <p
                className="projects-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                Chris Tong and I host the podcast and strive to provide valuable
                insights and practical advice for those looking to pursue
                internships and launch their careers.
              </p>
              <iframe
                src="https://open.spotify.com/embed/show/4pWMPkkJ1LcpuHdjXlOJkS?utm_source=generator"
                width="100%"
                height="20%"
                frameBorder="0"
                allowfullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer theme={theme} onToggle={props.onToggle} />
    </>
  );
}

export default UpGood;
