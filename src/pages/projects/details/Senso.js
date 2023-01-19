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
  // /Users/callum/Documents/coding/react-portfolio/src/assests/images/scansonic1.png

  return (
    <>
      <div className="projects-main">
        <Header theme={theme} setTheme={props.setTheme} />
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <h1 className="projects-heading-text" style={{ color: theme.text }}>
              AI Loan Predictions
            </h1>
          </Fade>
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <p
                className="projects-header-detail-text subTitle"
                align="left"
                style={{ color: theme.secondaryText }}
              >
                <br /> <br />
                Senso Education is a web application powered by a Java backend,
                React.js frontend, and a MySQL database that leverages
                Senso.ai’s AI algorithm for use in the automotive education
                market. It (aims to) follow the decisive, holy script of the
                esteemed Uncle Bob on Clean Architecture, while hopefully making
                a useful application in the process.
                <br /> <br />
                <b>PROBLEM STATEMENT</b>
                <br /> <br />
                A Motivating Example :
                <br />
                Note: Mercedes cars come in five main classes ranging from the
                least expensive to the most expensive, as follows: A-Class,
                B-Class, C-Class E-Class (electric), and S-Class.
                <br /> <br />
                Let's say that you are looking for a new Mercedes SUV. How do
                you pick between the C-Class and the S-Class, or maybe between
                the S-Class from 2018 versus the new S-Class released this year?
                You could buy the S-Class from this year (which maxes out your
                budget), or maybe you can pick the S-Class AMG (sports) version
                from 2018 with the premium interior or possibly the maxed-out
                C-Class AMG with heated seating, a premium leather steering
                wheel, and last but certainty not least, a cup warmer, which all
                comes in at the same price as the new S-Class.
                <br />
                <br />
                Do you see the problem? There is no definite best car for
                everybody, rather there is a perfect car for you, which may not
                be the same as the perfect car for someone else. Buying a car is
                about finding out which features matter the most to, rendering
                it a complicated decision that takes into account your budget,
                ownership length, and many other factors. Furthermore, the
                Mercedes-Benz dealership and producer encounter the other side
                of this problem. At the Mercedes dealership, a customer will
                come in and trade their old, maxed out S-Class SUV from 2018,
                and it is now sitting on their lot. The retailer wants to sell
                it to a customer, but the customer is looking at buying a
                custom, maxed-out C-Class that would need to be custom-made from
                the factory and shipped over, instead of picking the car in the
                retailer’s lot. What makes this problem worse is that that
                maxed-out C-Class that needs to be custom-made could very well
                be a worse fit for them, instead of the S-Class that is sitting
                on the retailer’s lot ready to be given away! It is the
                retailer’s job to educate the consumer and show them that “hey,
                the new custom C-Class might be worse for you than the 2018
                S-Class we have on our lot.” But how is the retailer supposed to
                make you, the customer, trust them? They need to show you
                quantitative data. They need to visualize the differences
                between the possible purchasing options, and educate the
                consumer in order for an equitable conversation or debate to
                take place.
                <br /> <br />
                <b>OFFICIAL PROBLEM STATEMENT</b>
                <br /> <br />
                Customers have inherent biases when buying cars (e.g., always
                second-hand versus always new). This leads them into worse
                purchasing decisions (e.g., buying new when buying used might
                work better) and creates problems for retailers (e.g. ordering a
                custom car instead of moving a car out of their lot).
                <br />
                <br />
                <b>CUSTOMER JOURNEY</b>
                <br /> <br />
                Before Senso Education:
                <center>
                  <img src={senso1} width="80%" />
                </center>
                <br></br>
                <br></br>
                <b>OUR SOLUTION</b>
                <br /> <br />
                Senso Education aims to help Mercedes-Benz retailers in
                educating customers in the choice between second-hand models
                available in the dealer's lot, versus purchasing a new, custom
                car. It does this by bridging the knowledge gap between the
                salesperson and the customer, which will facilitate a more open,
                trusting relationship between the dealerships and its clients.
                We offer graphical breakdowns tailored to customers’ preferences
                and financial information, along with a “How-To” on the process
                of evaluating a car’s value (which can subsequently be used by
                the retailer in their financing office). After Senso Education
                <center>
                  <img src={senso2} width="80%" />
                </center>
                <br /> <br />
                {/* <br /> <br /> */}
                {/* We will sell Senso Education to the Mercedes Retailer, as it is a tool to a) sell against, wherein they can walk their customers through the different options and show them a quantitative breakdown of their possible car purchases, and b) use it to create a trusting relationship between the customer and the retailer. This relationship builds the repour for future transactions (e.g. servicing, maintenance, trade-ins, etc.) and turns a one-time sale into a lifetime customer. */}
                <br /> <br />
                Note that Senso Education is positioned at the beginning of the
                upselling process, as soon as the customer steps foot into the
                finance office.
                {/* <br /> */}
                {/* Remark: for a close, more eye-friendly representation go to our MURAL board. */}
                <br /> <br />
                <b>SPECIFICATIONS AND/OR OVERVIEW</b>
                <br /> <br />
                Our work in shifting from Phase 1 to Phase 2 has been around
                connecting all of our aspects into a working application,
                colloquially referred to as “integration hell,” and trust us, it
                has been hell. By the end of Phase 1, we had finished the
                hosting aspect, a Java backend structure using the Spring Boot
                framework in communication with the Senso API, a graphing
                algorithm in Vanilla JavaScript, a database that had no way to
                connect to our backend, and a React frontend with static pages.
                We had a lot of work to do.
                <br /> <br />
                We are happy to update you that after many late nights and a
                non-zero amount of blood, sweat, and tears (and a broken desk
                leg) we have everything connected, and a fully functioning
                application that portrays our idea and demonstrates our
                learning!
                <br /> <br />
                The frontend went through a complete revamp in accordance with
                our pivot. We knew that our homepage was going to be our user’s
                first impression, and so we decided to take this opportunity to
                work on implementing a sophisticated design and practice the
                more aesthetic components of software design. Furthermore, we
                felt that this page was pivotal in ‘onboarding’ the user by
                letting them know what our application does and how it works,
                thus we made sure it did so effectively in order to do away with
                any ambiguity. The rest of the frontend is focused on getting
                inputs from the user (their finances and preferred cars) and
                displaying the corresponding results (the catalogue of cars and
                the subsequent graphical representations). Our big development
                between Phase 1 and Phase 2 was updating requests between the
                frontend and backend, and displaying the received information in
                an intuitive manner that effectively gets the information across
                (we think the ‘Catalogue’ page and ‘Details’ subpages is an
                exceptional example of this).
                <br /> <br />
                Our graphing algorithm has undergone a lot of changes. We have
                ported our initial work in matplotlib (Python) into a JS library
                called Chart.js. We are now generating two graphs with the
                user-inputted data, representing the depreciation of each car
                (as per the feedback from Mike and Jonathan), along with a
                graphical representation of the amortization data from the Senso
                API. We wrapped up our graphing section by incorporating a
                “How-to-Read” section and making our Vanilla JS graph run as a
                part of our React frontend, which took more time than expected.
                <br /> <br />
                As for our database and dataset, we have made a significant
                amount of progress. An eye-opening experience for our group was
                when Jonathan asked, “can I see a database query” and no one was
                able to give a real answer, so we decided to fix this. We have
                researched and created a whole mock dataset of twenty cars with
                multiple features (interior, engine, performance, image, etc.)
                and tailored depreciation for each car. Moreover, we made our
                database automatically read and log each car as an entry and
                create the corresponding entities (Car and Features).
                <br /> <br />
                All these changes have been implemented in one way or another
                into the backend (along with the Senso API information), where
                we decided what information to send, where to send it, and how
                the information should be formatted. Surprisingly, the amount of
                code in the backend shrunk once we started to implement Clean
                Architecture and the SOLID principles. Our working theory is
                that this is due to several design decisions that we have made
                (more on that later), and because Uncle Bob’s software design
                cuts down a considerable amount of duplicate code.
                <br /> <br />
                <b>TECH STACK</b>
                <br></br>
                <center>
                  <img src={techStack} width="80%" />
                </center>
                <br /> <br />
                <a href="https://github.com/TLI-Project">
                  {" "}
                  See the code on GitHub
                </a>
                <br /> <br />
                We are going to be handling the frontend of Senso Education
                through React, using HTML, SCSS, and JS. We decided on using
                React.js due to its remarkable popularity (we felt that this
                would be a good opportunity to learn a widely used library) and
                the flexibility involved in having various reusable components
                with states. We thought that React props would be useful for
                figuring out the flow of data, and the smooth learning curve
                made it an obvious choice for the frontend of our tech stack. We
                also decided to use SCSS due to its nesting rules, which would
                greatly organize the readability of our stylesheets and reduce
                the number of lines in our code.
                <br /> <br />
                The backend of Senso Education will be built in Java, using the
                Spring Boot framework to allow for easier integration between
                all our different components. This was discovered out of
                necessity and talking with other groups. We spent a while trying
                to integrate the backend to the frontend without a framework
                like Spring, yet we had no success. We heard lots of good words
                about Spring, and since the framework was also extremely
                well-documented, we settled on using it.
                <br /> <br />
                We are using MySQL, since our application requires some of SQL's
                relationship features. We specifically chose MySQL because after
                some research, we found that this was one of the most popular
                relational database systems, and would therefore be applicable
                to many future projects that we might be working on.
                <br /> <br />
                We deployed the Frontend on AWS Amplify. We felt that Amplify
                was a very approachable platform to host our frontend because of
                its ease of use (with one click, it would automatically be
                updated through the GitHub repository). We choose AWS Elastic
                Beanstalk to host our backend because the abstraction of being
                able to use multiple EC2's was interesting, and we felt that it
                might be useful for future work (though we did not use it for
                this project). Furthermore, it had an easy server configuration,
                and was it free unlike many of the alternatives that we
                researched (e.g., Opalstack, Firebase (functions)). Finally, we
                are hosting our database on AWS RDS. At this point, we had
                become very familiar with the AWS hosting platforms, and RDS
                allowed us to use our database of choice (MySQL) all the while
                being free and easy to set up.
                <br /> <br />
              </p>

              {/* <b>MAJOR DESIGN DECISIONS</b>
                                    <br /> <br />
                                    <b>PIVOTING</b>
                                    <br /> <br />
                                    We pivoted our whole application, and we think it is fair to say that this counts as a “major design decision” in itself. In many ways, this pivot served as a learning opportunity to show that putting the time in at the beginning of a project—during the planning phase—pays dividends further down the line. Many members of our group were unclear about what the application was, let alone how they would be able to code it. If we did not know what we were making, how were we supposed to explain it to our stakeholders (Mike, Paul, Nick, and Jonathan)?
                                    <br /> <br />
                                    Through some conversations with Mike, we decided to pivot our idea into something that our whole group could get behind, and redefine our scope into one that was far clearer and more manageable for our given time period. We changed our project from an all-encompassing encyclopedia of car information, focusing on the effects that features have on the amortization of a car (which sounds confusing to even write down), into a sales tool that educates customers on which car and financing model works best for their needs.
                                    <br /> <br />
                                    We created a Pivot Document and a new Figma flow to reflect this change, and get our whole team on board.
                                    <br /> <br />
                                    <b>REMOVING USERS</b>
                                    <br /> <br />
                                    Our application was originally intended to target users that were not necessarily in the retailer’s finance office. This meant that we needed a user system that would allow customers to print out their results, log back in to make edits, and so forth. With our pivot, and our new scope of being positioned in a finance office, it does not make sense for our application to incorporate a user system. After all, how many times do you really need to enter a finance office? The (typical) answer is once. Therefore, why would you need to log back in?
                                    <br /> <br />
                                    We got caught up on creating a technical feature because we were excited by it, and felt victim to the sunk cost fallacy along with a little peer pressure (“everyone else seemed to have a login, so we should probably make one too”). We had to take a step back and think about our application in a logistical mindset: what is our MVP, what do we really need, and what is our technical fluff? This brought us to the decision that spending our time on a user system (which added nothing to our application) was a waste of resources, and rather we should allocate that time to adding constructive features to our application (for example, the “How to Read Graphs” section).
                                    <br /> <br />
                                    <b>MOCK CREDIT SCORE</b>
                                    <br /> <br />
                                    We decided to mock the credit score in our backend as a foundational example of how we can connect future APIs to our application. Keeping with this motif, we have implemented it as if we are accessing a Credit Score API (sending all the information needed by websites such as Equifax and Transunion), and returning a random number between 300-800 (to simulate the API response).
                                    <br /> <br />
                                    This makes the user experience stay quite constant between our MVP and our potential market application, all the while modularizing the implementation of the Credit Score API.
                                    <br /> <br />
                                    <b>COHERENT GRAPHING</b>
                                    <br /> <br />
                                    A big part of the feedback that we got was around our graphs; mainly that the average person (apparently) does not have the same affinity towards graphical representation of amortization data and other complex relationships as a handful of STEM students (it was a surprise to us as well). In short, graphs are intimidating and scare people. Therefore, we had two options: a) remove the graphs and focus on alternative ways to represent the difference between our cars, or b) double down on our goal of education and educate the consumer on how to read our graphs.
                                    <br /> <br />
                                    Ignoring the sunk cost fallacy of the time that we had already put into the graphing algorithm, and our bias towards graphical representations of data (because like… graphs are really cool, you know?), we decided to stick with the graphs because we felt that they were the most intuitive way to compare multiple cars. This was because many other representations aimed to give a concrete answer to “what is the best car,” which goes against our whole goal. We believe that “the best car” for two people is not the same, rather, everyone’s perfect car varies, and educating them on our graphical representations would allow them to choose what car fits them the best. We did this by adding a “How to Read Graphs” section into our application, which provides the user with a comprehensive rundown on reading graphs (thus making them more approachable).
                                    <br /> <br />
                                    <b>CLEAN ARCHITECTURE</b>
                                    <br /> <br />
                                    Our backend repository Roo mainly adheres to Clean Architecture, as we took care to follow the Dependency Rule and eliminate source code dependencies that point from inner rings to outer circles. For example, our code is divided as follows: constants, controllers, database, entities, gateways, interfaces, and services. Our entities represent enterprise business rules (e.g., our ‘Car’ entity), and they are the last parts to change in response to changes elsewhere in our code (the class is mostly comprised of getters). Our ‘services’ (aka use cases) section went through an entire change towards the end of Phase 2 in order to align with dependency injection: we added use cases for all of the endpoints, and we have a number of classes that depend on our entities—an ‘inner layer’ interaction. We also have two classes in the ‘gateways’ division: CarAccessSql.java implements an interface to find the right car given a car ID, and also has a method to get all of the cars in the database, while DatabaseConnection.java creates a connection to the database using the JDBC driver (adhering to Dependency Injection). These classes have methods for data access, yet they do not actually depend on the outermost ring (which has the database itself), as they talk to the database through the interface CarAccessInterface. Our last main section is the ‘database’ section itself, which contains just one class that allows initialization of the database to occur. All in all, our code generally follows Clean Architecture, and once we got over the initial refactoring (to incorporate dependency injection), clearing up any subsequent bugs became easier because they were often restricted to that layer of our code.
                                    <br /> <br />
                                    <b>CLASS DIAGRAM</b>
                                    <br /> <br /> */}

              {/* <b>SOLID DESIGN PRINCIPLES</b>
                                    <br /> <br />
                                    <b>SINGLE RESPONSIBILITY PRINCIPLE (SRP)</b>
                                    <br /> <br />
                                    Our code adheres to the Single Responsibility Principle because each class is responsible for one task only—only a single reason to change. For example, everything relating to our database is in a separate class or interface depending on what it does: we have a class specifically for initializing the database (creating and populating a table of cars from the dataset), a class for database constants, a class for creating a connection to the database using the JDBC Driver, a class for retrieving a car entry from the database given the car’s ID, and so on. This applies to all areas of our backend, meaning that each class has one specific, distinct task, and we have ensured that each class has no more than 200 lines. As for our frontend, the existence of React components and our choice to use the ‘By Component’ packaging strategy makes it extremely easy to ensure that our frontend follows the Single Responsibility Principle. Each test, stylesheet, and JavaScript file belongs to one component (e.g., ‘Home’, ‘Finance’, ‘Catalogue’, etc.) which allows that file to have one specific responsibility, such as styling the homepage or providing the JSX code for the finance page.
                                    <br /> <br />
                                    <b>OPEN/CLOSED PRINCIPLE (OCP)</b>
                                    <br /> <br />
                                    We did not fully commit to the “Open/Closed Principle so we must add interfaces everywhere” style because at the end of the day, we are working with a MVP that will never get touched again and will not need to be added to. This being said, we made sure to keep OCP in mind, and thus implement the Car Builder design pattern. This allows us to add more features and files to the Car dataset and just change the Car Builder while keeping the rest of the code the same. This was really nice and something we used when we started adding depreciation data, performance packages, and engine types to the
                                    <b> LISKOV SUBSTITUTION PRINCIPLE (LSP)</b>
                                    <br /> <br />
                                    We do not extend classes and so this is not applicable to us.
                                    <br /> <br />
                                    <b>INTERFACE SEGREGATION PRINCIPLE (ISP)</b>
                                    <br /> <br />
                                    The beauty of only having one interface is that it is easy to check that it follows the Interface Segregation Principle, and ours does. We only have one interface that does two things, 1) gets a single car by ID, or 2) gets all the cars in the database which are both used by the classes that extend the interface.
                                    <br /> <br />
                                    <b>DEPENDENCY INVERSION PRINCIPLE (DIP)</b>
                                    <br /> <br />
                                    Big rework on this department. We started with having our whole backend adhere to the reverse of the dependency inversion principle (we thought it would be fun and totally didn’t think DIP went from inside out instead of outside in). We have gone through the code and checked that each layer is importing only the classes that it is allowed to (helped by our packaging strategy). This was made relatively easy since we only have two gateways to the database and so we only had to implement Dependency Injection once as we can see with our CarAccessInterface.
                                    <br /> <br /> */}
              {/* DESIGN PATTERNS
                                    ADAPTERS
                                    GraphingDataAdapter

                                    The adapter design pattern we have implemented in our GraphingDataAdapter is like a couple’s counsellor that gets a husband and wife to agree upon how to parent their children. It takes information from our User and information from our Car and adapts it into a JSON that our child (the Senso API) can understand and respond to. To get away from this rather abstract analogy, our information for the Senso API request is stored in two different entities (a GraphingData, and the Car that the user is looking to find out amortization data about). We are using the GraphingDataAdapter to translate the information stored within our given GraphingData and Car (loan amount, list price, credit score,  into a single string formatted as a JSON that we can use for the API request body.

                                    CreditScoreAdapter

                                    Like our GraphingDataAdapter, we have an adapter that prepares our user’s inputs for our hypothetical CreditScore API. It does this by taking all the information needed to run a credit score check (address, postal code, city, province, date of birth, and SIN number) and formats it into a string formatted JSON for the credit request body (or what we are assuming the credit request body looks like).

                                    These adapters are based on the information given by Refactoring Guru which we have found to be a very helpful resource (even more so than some of the in-class resources). Both of these could be done by a helper method and we don’t think would break clean or SOLID principles, but we felt that it was an opportunity to implement some design patterns and chose to take advantage of it.
                                    BUILDERS
                                    We have gone back on our previous statement about how “we don’t need builders or factories because nothing we make is complicated enough,” because the further we got into our projects, the more features we started adding to our car, and the more complicated our Car entity became. Thus, we have implemented a Car Builder

                                    Car Builder
                                    This CarBuilder Design pattern contains a CarDirector and a CarFeatureBuilder which all accumulate to create a little team which oversees making a Car entity with its relevant Feature entities as follows.

                                    1.	The CarDirector gets the request to make a new car from a database entry and is given the entry as a ResultSet
                                    2.	CarDirector tells the FeatureBuilder to make a list of the Car’s depreciation
                                    a.	The FeatureBuiler goes through the result set given and accumulates all of the depreciation data from the last 10 years and adds it to a list to return.
                                    3.	CarDirector tells the FeatureBuilder to make the Car’s main Features
                                    a.	F.B. makes the interior of the car with the name and description from the database entry
                                    b.	F.B. makes the engine of the car with the name and description from the database entry
                                    c.	F.B. makes the performance package of the car with the name and description of the database entry
                                    4.	Finally, the CarDirector builds the new car with the feature set and depreciation list created above
                                    FAÇADE
                                    From Design Document 1:

                                    “Each car that presently have in our dataset represents an entire subsystem of features and details, including different makes, models, kms driven, and other details. We felt that our Car entities would therefore be a good place to implement the Facade design patterns. This would allow us to provide a higher-level interface that makes a subsystem of features and makes it easier to use when calculating the total price for the Senso API calculation.”

                                    We were wrong. Façade design pattern is way overkill for our Cars. Simply using the Builder Design pattern when creating the cars would make our whole lives way easier because we really do not have a whole “ecosystem” surrounding our cars.

                                    This being said, we are inadvertently using the Façade design pattern in our endpoints, but this wasn’t exactly planned.
                                    PRIVATE CLASS DESIGN PATTERN
                                    We have decided to make all of our entities implement the Private Class Data design pattern, in order to reduce the exposure of their details. This allowed us to make easier changes in the future (e.g., converting kms/hr to miles/hr in our Car entity). Furthermore, we felt that since we will be having user’s financial information in our system, having control through getters and would allow for an extra level of security. You can see this design pattern in the entities Car and Feature. They all have private attributes, with getter methods allowing access.
                                    PACKAGING STRATEGIES
                                    We decided to implement two separate packaging strategies into our application—one for our frontend, and one for our backend.
                                    FRONTEND
                                    Our frontend, Woozles, implements the “By Component” packaging strategy. We made this decision because our project had multiple different components such as our ‘Catalogue’, ‘Home’, and ‘Compare’ page to name a few. Each of these components has a corresponding SCSS file and a JS file that relies on it. Being able to organize the different JS and SCSS files based off which component they are related to was crucial to the functionality of our code, because otherwise the JS files and SCSS files would need unique names for each feature (and linking the wrong SCSS file would result in a different look for our webpage). This would have turned the whole frontend organization into a big, overcomplicated mess. By implementing the “By Component” strategy, we have kept our code organized, and made it easy to reference the different components of the frontend (we did not realize it until later, but the way React is set up is conducive to this packaging strategy since it nests components of code).
                                    BACKEND
                                    Our backend, Roo, implements the “By Layer” packaging strategy. In many ways, this was used as a method in holding our hand as we follow CLEAN Architecture. Separating our files into the different layers (ESB, ABR, IA, and F&D) has allowed us to quickly double-check that the dependency between files follows Clean Architecture, and therefore make Uncle Bob proud. We also felt that the clutter of this packaging strategy would be minimal since our application is only an MVP, and thus will be quite small.
                                    TEAM ORGANIZATIONS (AGILE AND OTHER)
                                    We have made our Kanban board in Jira to organize our workflow for each week. We have kept everything confined to two sprints, one representing Phase 0/1 work and another representing Phase 2 work. It has been our way of making sure that we delegate work appropriately, and allows us to check our progress throughout the week.

                                    As for GitHub, we maintain all our branches by including the branch name, ticket number (if applicable), and author. Following the feedback from Phase 1, we have taken care to periodically delete any old, merged, or irrelevant branches. Our pull requests follow our naming convention (name, ticket number, author) if applicable, and we have implemented a template that all pull requests must follow which includes a brief description of the pull requests, the features added, testing instructions and various checklists concerning the type of change it is and whether it follows the best practices we have laid out. For the approval of pull requests, we either assign someone to approve the pull request, or ask for a review from a team member within the Slack channel. This ensures that we have our pull requests merged and reviewed in a timely manner in order to prevent any conflicts that might arise. We leave comments if there are any issues or concerns related to the PR, and we make sure that all pull requests are closed once they are merged in.
                                    ACCESSIBILITY REPORT
                                    EQUITABLE USE
                                    Senso Education follows this principle because it is convenient for all types of users, and the web application is straightforward: there is only way to use the app (clicking options, clicking the ‘next’ button, filling in information, clicking the ‘next’ button, etc.) Users do not have any customizations in terms of how the app is used, and the means of use are identical in every aspect of functionality that the app offers. Since all the features are free and available, Senso Education avoids segregating or stigmatizing any of its prospective users. Furthermore, the app deals with financial information, thus we have taken care to make provisions for privacy and security (both of which are equally applied to its clients). For example, the use of entities and getters provides a barrier of safety, and we do not permanently store personal information since we decided against implementing client accounts (this design decision is further elaborated upon in the Design Document).
                                    FLEXIBILITY IN USE
                                    We currently do not have many aspects of our program that adhere to this principle, yet we could implement features in order to accommodate various preferences and abilities. Our program is a web application and thus any accommodations to right- or left-handed access are inapplicable, yet we can promote choice in methods of use by having a text-to-speech option across our website. Similarly, we could make the app accept audible feedback in order to function, which would provide extra accommodations for those who are visually impaired. (However, this aspect would not be a high priority to implement, as the app is intended to be used by the retailer at their financing office, and any visually impaired employees would already have an understanding of how to use the app). In the future, we could also implement a dark mode theme, which would provide extra choice and adaptability especially if the retailer’s device has dark mode already enabled.
                                    SIMPLE AND INTUITIVE USE
                                    Senso Education is extremely intuitive to use: as previously explained in the ‘Equitable Use’ portion of this document, there is only one way to use the app, and each step is clear and outlined in the webpage’s header. There is no unnecessary complexity in using Senso Education, and since there are no unexpected or extra steps involved, it is consistent with user intuition. The homepage outlines all the information and steps related to our app, and the individual pages in the use process solely contain information consistent with said step. The effective prompting after task completion comes from the website’s buttons: after the user completes each step, there is blue button centred on the page with prompts such as ‘Let’s Go’, ‘Browse Cars’, and ‘Next’, and they are responsive to user interactions (e.g., they change colours during a mouse hover). The way we can improve our program’s adherence to this principle is by accommodating a wider range of literacy and language skills: it would be helpful to have a language toggle at the top-right corner of our application, and prioritize having a French option since it is one of Canada’s two official languages.
                                    PERCEPTIBLE INFORMATION
                                    We currently do not offer different modes of providing information, as all our information is expressed in a text format. Future improvements may include adding pictorial modes in addition to our current textual format (for redundant presentation) and increasing the font size in certain areas of our website (some sections have a font height that is equal to or less than the line height, which may decrease legibility). We do have some aspects that help our app adhere to this principle: information pieces of information are bolded or highlighted in different colours, we have buttons that respond to user interactions, we use a standard font family that should work on all devices, and we differentiate important elements with icons or large header sizes. Another specific way that we can differentiate important elements is on the ‘Catalogue’ page, where the user can select a vehicle and make a blue checkmark appear in the corner of their selected option. However, this checkmark is somewhat small, and its particular shade of blue blends into the background, so we can maximize its legibility by enlarging the image or by making the checkmark a different colour (e.g., a bright green).
                                    TOLERANCE FOR ERROR
                                    Senso Education follows this design principle quite well, as it ensures that unintended client actions are kept to a minimum. We do not have many ‘hazardous elements’ on our page and there is thus no need to isolate them on our webpage, and we provide ample warning messages when user inputs do not align with our input parameters. For instance, our ‘Finance’ page is the portion of our app where the user must input all their location data and financial information, and if they accidentally click the ‘Browse Cars’ button without filling in all of the fields, there will be a pop-up error message notifying the user of the first field that has been left blank. Similarly, the user must select at least one car on the ‘Catalogue’ page in order to proceed to the next page, or a notification saying ‘please select a car’ will appear in their browser. In a prior iteration of our application, we took in the user’s credit score and validated their information by checking if it was between 300 and 850, yet this aspect is now defunct because our current version does not require the user’s actual credit score (more on this decision can be found in our Design Document).
                                    LOW PHYSICAL EFFORT
                                    This universal design principle is largely inapplicable to our application (and on a broader scale, to software in general). Since our program is a web application, there is not much we can do in way of allowing the user to maintain a neutral body position, and there is no operating force involved in any step of using our application. Our design definitely allows for minimal fatigue and physical effort, as the only user interactions required are typing (filling in several text boxes) and clicking a few buttons, neither of which are physically exerting in any way. Senso Education can also be used rather quickly (part of our tagline mentions that the process can be completed ‘all in under five minutes’) which signifies that our application is efficient and minimizes any repetitive actions.
                                    SIZE AND SPACE FOR APPROACH AND USE
                                    This principle is also largely inapplicable to software, and in our program, there is no need to accommodate variations related to seated/standing users, hand/grip size, or devices of personal assistance. We do provide a clear line of sight to essential elements such as forms and buttons, which allows the user to manipulate them regardless of size or space constraints. Every element that handles user interactions on the page is reachable, as it is just one mouse click away.
                                    LIKELY TARGET MARKET
                                    We would market Senso Education to Mercedes-Benz car retailers, as the web application is intended to be used by such retailers at the financial office, along with a prospective client who is looking to buy a Mercedes SUV. This is a very specific market, as the scope and theme of our project has already been narrowed down quite a bit for us (since all TLI projects are related to the automotive industry, and must utilize the Senso API in some way). We would market our application to this category because Senso Education provides a wide array of benefits to all stakeholders involved (it is beneficial for not just Mercedes-Benz car retailers, but to car manufacturers and prospective customers as well), yet it makes the most sense if our app is poised for use at the retailer’s office. This is because we intend for the app to educate the customer on their possible options, as well as facilitate a lasting relationship between the client and the retailer based on open information and transparency. In the future, we hope to expand the use of our app to other brands and car dealerships as well, and not restrict it to the specific category of Mercedes-Benz retailers.
                                    UNLIKELY TARGET MARKET
                                    Our program is less likely to be used by anyone who is not a Mercedes-Benz dealership employee, who is helping a prospective customer. Senso Education is tailored to be used by retailers who want to help clients discover the SUV that is the most suited towards their situation and needs, and the customer themself is unlikely to use the application on their own (especially if the retailer has already walked them through the process at the financial office). More specifically, some examples of target demographics that are unlikely to use Senso Education include: people who do not have a steady stream of income, young people or those who do not work full-time (e.g., students or those under the age of 18), people who do not have families (many Mercedes-Benz SUVs can seat up to seven people), people with household incomes up to a certain point (Mercedes-Benz SUVs are among the more expensive cars in the market), and more. Additionally, the use of Senso Education is currently intended to be based in North America, meaning that any population outside of this content would constitute an unlikely target market. */}
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
