import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const spotlightProjects = {
      "3d Robot Design Page": {
        title: "3d Robot Design Page",
        desc:
          "A third-person survival-mode game where you battle against time and space to return to Earth.",
        techStack: "Spline",
        link: "https://app.spline.design/file/07c4782c-6096-4d22-92b7-9b03e326bf22",
        open: "https://app.spline.design/file/07c4782c-6096-4d22-92b7-9b03e326bf22",
        image: process.env.PUBLIC_URL + "/assets/Robot design_imresizer.jpg"
      },
     
      "Corporate Network Design": {
        title: "Corporate Network Design",
        desc:
          "This project presents a scalable corporate network designed using Cisco Packet Tracer. The network simulates departments including HR, IT, and Finance, with efficient subnetting, routing, QoS, and security features.", 
           techStack: "Packet Tracer",
        link: "https://github.com/owvr27/topology/",

        image: process.env.PUBLIC_URL + "/assets/topology.png"
      },
      Portfolio: {
        title: "portfolio",
        desc:
          "Built a personal portfolio website from scratch using HTML, CSS, and JavaScript to showcase my skills, projects, and experience. Focused on clean design, responsive layout, and smooth navigation for an engaging user experience.",
        techStack: "Html Css JS",
        link: "https://github.com/owvr27/owvr",
        open: "https://owvr27.github.io/owvr/",
        image: process.env.PUBLIC_URL + "/assets/1Portfolio.png"
      }
    };
    const projects = {
      "Airline Ticket System": {
        desc:
          "Airline Ticket System with Java A Java-based desktop application with GUI and database integration for managing airline ticket bookings. It supports user and admin roles, flight search, ticket reservation, and management.",
        techStack: "Java,JSwing,MySql ",
        link: "https://github.com/owvr27/AirlineTicketSys",
       
      },
      "To Do List Manger": {
        desc:
          "A self-learning A.I. that learns to traverse through a complex maze using the genetic algorithm.",
        techStack: "Python , Json",
        link: "https://github.com/owvr27/ToDoListMngerPY",
      
      },
      "Fitness App Database": {
        desc:
          "A MySQL-based backend for managing a fitness application that tracks users, workouts, goals, and progress.A system that establishes an ORM connection to a Prisma client in order to communicate logs from microservices.",
        techStack: "MySql,Java",
        link:
          "https://github.com/owvr27/Fittness-app-database"
      },
      "Corporate Network Design": {
        desc:
          "Corporate Network Infrastructure Design BusinessThis project presents a scalable corporate network designed using Cisco Packet Tracer. The network simulates departments including HR, IT, and Finance, with efficient subnetting, routing, QoS, and security features.",
        techStack: "Packet tTracer",
        link: "https://github.com/owvr27/topology",
       
      },
      "Pepsi Website": {
        desc:
          "Designed and developed a responsive Pepsi-branded website using HTML, CSS,Focused on modern UI/UX design, smooth animations, and mobile-friendly layout to deliver a visually appealing user experience",
        techStack: "Html ,Css",
        link: "https://github.com/owvr27/pepsi-site",
        
      },
      " Ideal Weight Calculator ": {
        desc:
          "This is a simple and user-friendly Python application that calculates a person's ideal (perfect) body weight based on the Devine formula, using Tkinter for the graphical interface.",
        techStack: "Python , Tkinter",
        link: "https://github.com/owvr27/ideal-weight-calculator-python",
        
      }
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/  projects</span>
        </div>
        <Carousel>
          {Object.keys(spotlightProjects).map((key, i) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={spotlightProjects[key]["image"]}
                alt={key}
              />
              <div className="caption-bg">
                <Carousel.Caption>
                  <h3>{spotlightProjects[key]["title"]}</h3>
                  <p>
                    {spotlightProjects[key]["desc"]}
                    <p className="techStack">
                      {spotlightProjects[key]["techStack"]}
                    </p>
                  </p>
                  <ExternalLinks
                    githubLink={spotlightProjects[key]["link"]}
                    openLink={spotlightProjects[key]["open"]}
                  ></ExternalLinks>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <ExternalLinks
                      githubLink={projects[key]["link"]}
                      openLink={projects[key]["open"]}
                    ></ExternalLinks>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
