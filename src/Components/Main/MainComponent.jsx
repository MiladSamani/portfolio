import React from "react";
import image from "../../Assets/images/images.svg";
import Programmer from "../../Assets/images/MiladSamani.JPG";
import GithubIcon from "../../Assets/images/github.svg";
import Linkedin from "../../Assets/images/linkedin.svg";
import {
  About,
  Container,
  MainImage,
  ProgrammerImage,
  SocialIcons,
} from "./StyledMainComponent";
import { SocialMedia } from "./StyledMainComponent";

function Main() {
  const SocialMediaIcons = [GithubIcon, Linkedin];
  const ProgrammerName = "Milad Samani";
  const ProgrammingLanguage = "<Front-end Developer/>";
  return (
    <>
      <Container>
        <ProgrammerImage src={Programmer} alt={Programmer} />
        <About>
          <h2>{ProgrammerName}</h2>
          <h3 > {ProgrammingLanguage} </h3>
        </About>
        <MainImage src={image} alt={image} />
        <SocialIcons>
          {SocialMediaIcons.map((socialIcon, index) => (
            <SocialMedia src={socialIcon} alt={socialIcon} key={index} />
          ))}
        </SocialIcons>
      </Container>
    </>
  );
}

export default Main;
