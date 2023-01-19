import React from "react";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";

import "../Projects.css";
import { style } from "glamor";
import { Fade } from "react-reveal";

import cvf_admin from "../../../assests/images/admin-view-cvf.gif";
import cvf_user from "../../../assests/images/cvf-survey-view.gif";

import tbm_overview from "../../../assests/images/tbm-overview.gif";

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
              Agile Tool Suite
            </h1>
          </Fade>
          <Fade bottom duration={2000} distance="40px">
            <h2>Competing Values Framework Survey</h2>
            <div className="projects-heading-div">
              <p
                className="projects-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                <b>Problem: </b>During the COVID-19 pandemic, many businesses
                were forced to adapt to remote work in order to continue
                operations. This shift presented unique challenges, particularly
                for organizations that relied heavily on in-person interactions
                and face-to-face training sessions. One such company was
                IncrementOne, a North American boutique consulting firm that
                specialized in Agile coaching. In order to continue delivering
                effective training to its clients, the company's Agile Coaches
                needed to find new ways to translate their in-person activities
                to a virtual setting.
                <br></br>
                <br></br>
                <center>
                  <img
                    src={cvf_user}
                    alt="CVF User View"
                    style={{ width: "80%" }}
                  />
                </center>
                <br></br>
                <b>Solution: </b>To help facilitate this transition, my friend
                and I developed a web application that would allow
                IncrementOne's Agile Coaches to deliver the Competing Values
                Framework (CVF) survey online. The CVF is a widely-used tool
                that helps organizations assess their values and priorities in
                order to improve performance and achieve their goals.
                Traditionally, the survey was administered in-person and
                involved a lot of physical interaction and visualization of
                data. By creating a web-based version of the survey, we hoped to
                make it easier for IncrementOne's Agile Coaches to continue
                delivering valuable training to their clients remotely.
                <br></br>
                <br></br>
                <center>
                  <img
                    src={cvf_admin}
                    alt="CVF Admin View"
                    style={{ width: "80%", justifyContent: "center" }}
                  />
                </center>
                <br></br>
                <br></br>
                Our web application was built using Python and the Django
                framework, with a basic front-end designed using HTML and CSS.
                It allowed users to take the CVF survey online and receive a
                visual representation of their results in the form of a polar
                plot (seen above). The application also included a Report page
                that allowed administrators to view the results of all users
                individually, as well as download the results as a CSV file. In
                addition, the application allowed administrators to access
                anonymous and non-anonymous averages and comparisons of the
                survey results (seen to the right).
                <br></br>
                <br></br>
                Overall, our web application was a simple yet effective tool
                that helped IncrementOne's Agile Coaches smoothly transition to
                delivering online training during the COVID-19 pandemic and is
                still in use until this day. By providing a convenient way for
                users to take the CVF survey and receive valuable insights into
                their values and priorities, we were able to support
                IncrementOne in continuing to deliver top-quality training to
                its clients despite the challenges posed by the pandemic.{" "}
                <br></br>
                <br></br>
              </p>
            </div>
            <h2>Team Benchmark Application</h2>
            <br></br>
            <br></br>

            <div className="projects-heading-div">
              <p
                className="projects-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                The following summer, we developed a tool called the Team
                Benchmarking Application that helps assess the maturity of a
                team in regards to team formation, behavior, sprint behavior,
                and shippable product increments. The application was built
                using similar frameworks as the previous tool, but with a few
                notable differences. For example, it switched from using a
                SQLite database to a Postgresql database and incorporated an
                updated graphing library. The biggest change was that this tool
                would be made available to the public, rather than being used
                internally by IncrementOne. This meant that we had to make the
                application more user-friendly and ensure that it was secure,
                including adding a full login system. We also had to make sure
                the application was scalable, as we needed it to be able to
                handle a large number of users (30,000+). Overall, this was a
                great learning experience and allowed us to expand our skillset.
                These tools have helped IncrementOne improve discovery and
                benchmarking by 40-100% for clients such as the Royal Bank of
                Canada, Telus, Kohler, and the Government of Canada, and have
                helped the company gain brand recognition and open up new
                opportunities in the competitive consulting and training market.
                It is expected that these tools will create a new annual revenue
                stream of $200,000. <br></br>
                <br></br>
                <center>
                  <img
                    src={tbm_overview}
                    alt="TBM Overview"
                    style={{ width: "80%" }}
                  />
                </center>
              </p>
            </div>
            <div>
              <h2>Affect On Me</h2>
              <p
                className="projects-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                Throughout the duration of these projects, I have had the
                opportunity to expand my knowledge and skills in a number of
                areas. When I first started working on these projects, I was
                building on the foundation of knowledge that I had gained in my
                first year computer science class. However, as I worked on these
                projects, I was able to take my skills to the next level,
                developing an application that was used by over 30,000 users and
                brought real, tangible value to the company.
                <br></br>
                <br></br>
                As I gained a deeper understanding of what it takes to lead a
                development team, my role as product manager evolved. I started
                out working with an external supervisor, but eventually
                transitioned to working with two in-house coaches. This allowed
                me to learn more about the inner workings of the development
                process and gain valuable insight into how to effectively manage
                a team. Today, I am leading the expansion of the tool suite,
                including updating the look and feel with a React overhaul and
                adding new features to both the CVF and TBM app to increase
                their versatility.
                <br></br>
                <br></br>
                In addition to coding, I am now serving as the Product Owner for
                the tool suite, which involves creating roadmaps, user stories,
                and managing the development team. This role requires me to have
                a strong understanding of the needs and wants of our users, as
                well as understanding the technical capabilities of our
                development team. To be successful in this role, I have drawn on
                the skills I learned in my Certified Scrum Product Management
                Course and Certified Scrum Master Course, which have helped me
                understand how to effectively manage the development process and
                ensure that our products are of the highest quality.
                <br></br>
                <br></br>
                The new responsibilities I have taken on as a product owner have
                also allowed me to create my own software company that allows
                students to work on these projects when they have time between
                classes. To date, I have worked with four students through this
                company, helping them to gain valuable hands-on experience and
                develop their skills.
                <br></br>
                <br></br>
                While the code we wrote may have been simple, I believe in the
                principle of Occam's razor, which states that the simplest
                solution to a problem is often the best one. In this case, the
                application we developed was able to effectively meet the needs
                of our users without being overly complex or cumbersome. In
                addition to improving my technical skills, I also had the
                opportunity to learn a lot about interpersonal and leadership
                skills through my work on these projects.
                <br></br>
                <br></br>
                Overall, these projects have been a valuable learning experience
                that have helped me grow both personally and professionally. I
                have gained a wide range of skills and knowledge, from technical
                expertise to leadership and interpersonal skills, that will be
                valuable to me as I continue to develop my career.
              </p>
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
