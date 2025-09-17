import React from "react";

import "../styles/Intro.css";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import FadeInSection from "./FadeInSection";
import FractalTree from "./FractalTree";

class Intro extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
      visible: true,
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey,
    });
  }
  render() {
    return (
      <div id="intro">
        <FractalTree></FractalTree>
        <Typist avgTypingDelay={120}>
          <span className="intro-title">
            {"hi, "}
            <span className="intro-name">{"OMAR"}</span>
            {" here."}
          </span>
        </Typist>
        <FadeInSection>
          <div className="intro-subtitle">I see what others miss..</div>
          <div className="intro-desc">
           I'm a Computer Engineering student from Egypt. I'm passionate about security and fascinated by high-impact technology that scales. I’ve interned at multinational companies, gaining exposure to AI, data, and cybersecurity. I’m constantly driven by curiosity and the challenge of building secure, meaningful systems.


          </div>
          <a
            href="mailto:owvr.vhmed@gmail.com"
            className="intro-contact"
          >
            <EmailRoundedIcon></EmailRoundedIcon>
            {" Say hi!"}
          </a>
        </FadeInSection>
      </div>
    );
  }
}

export default Intro;
