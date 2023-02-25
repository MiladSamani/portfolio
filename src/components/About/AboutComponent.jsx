import React from "react";
import { AboutDetail, AboutHeader, Container } from "./StyleAboutComponent";

import aboutImage from "../../Assets/images/about.svg";

function AboutComponent() {
  return (
    <Container>
      <AboutHeader src={aboutImage} />
      <AboutDetail>
        Ever since I can <span className="blue">remember</span> I was kind of
        person who{" "}
        <span className="orange">enjoyed</span> to know more about the{" "}
        <span className="green">world</span> around me and nowadays my{" "}
        <span className="green">world</span> is summed up in the word{" "}
        <span className="purple">Web</span>. The more{" "}
        <span className="red">time</span> passes, the more I{" "}
        <span className="blue">touch</span> the spirit of this system{" "}
        <span className="orange">and</span> progress in this field means
        progress in <span className="green">life</span> for me 🪐
      </AboutDetail>
    </Container>
  );
}

export default AboutComponent;
