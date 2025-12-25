import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
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
    const one = (
    <p>
I am currently a Top Achiever Bachelor’s student in Computer Engineering (Cybersecurity track) at
<a href="https://sut.edu.eg/" target="_blank">Polytechnic of Egypt University</a>.
Alongside my studies, I work as an Offensive Security Engineer at DeepStrike, where I focus on penetration testing, vulnerability analysis, and real-world attack simulations.

Previously, I interned at
<strong><a href="https://vodafone.com" target="_blank">Vodafone</a></strong>, collaborating with the AI & Data team on developing and tuning classification models using Decision Tree and Random Forest algorithms, while also gaining hands-on exposure to penetration testing fundamentals during the final phase of the internship.

Additionally, I completed a Frontend & Security internship at Al Dahra Agriculture, contributing to a secure web dashboard for agricultural data analysis, with an emphasis on security implementation and system hardening.
</p>


    );
    const two = (
      <p>
        Outside of work, I'm interested in following the developments of
        science. I also play a lot of video games. And make TikToks.
      </p>
    );

    const tech_stack = [
      "Network",
      "Python",
      "HTML CSS",
      "Java",
      "Javascript ",
      "PHP"
    ];

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
            </div>
            <div className="about-image">
             
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
