import React from "react";
import {
  Card,
  CardContainer,
  CardDescription,
  CardDetails,
  CardLine,
  CardImage,
  CardTechnologies,
  CardTitle,
  Container,
  DesignButton,
  Header,
  CardButton,
  LeftButton,
  RightButton,
  ImageBtn,
} from "./StyleProjectsComponent";

import projectsImage from "../../Assets/images/projects.svg";

import githubImage from "../../Assets/images/github.svg";
import watchImage from "../../Assets/images/watchImage.svg";

import firstProject from "../../Assets/images/firstProject.png";
import secondProject from "../../Assets/images/secondProject.png";

function ProjectsComponent() {
  return (
    <Container>
      <Header src={projectsImage} />
      <CardContainer>
        <Card>
          <CardImage src={secondProject} />
          <CardDetails>
            <CardTitle>Academy-Project</CardTitle>
            <CardLine />
            <CardDescription>
              Sepehr Academy admin panel with CoreUi
            </CardDescription>
          </CardDetails>
          <CardTechnologies>
            Technologies: / <span className="blue"> CoreUi </span> /
            <span className="red"> React.js </span> /
            <span className="orange"> Javascript </span>
          </CardTechnologies>
          <CardButton>
            <LeftButton>
              <ImageBtn src={githubImage} alt="" />
            </LeftButton>
            <RightButton>
              <ImageBtn src={watchImage} alt="" />
            </RightButton>
          </CardButton>
        </Card>

        <Card>
          <CardImage src={secondProject} />
          <CardDetails>
            <CardTitle>Academy-Project</CardTitle>
            <CardLine />
            <CardDescription>
              Sepehr Academy admin panel with CoreUi
            </CardDescription>
          </CardDetails>
          <CardTechnologies>
            Technologies: / <span className="blue"> CoreUi </span> /
            <span className="red"> React.js </span> /
            <span className="orange"> Javascript </span>
          </CardTechnologies>
          <CardButton>
            <LeftButton>
              <ImageBtn src={githubImage} alt="" />
            </LeftButton>
            <RightButton>
              <ImageBtn src={watchImage} alt="" />
            </RightButton>
          </CardButton>
        </Card>
      </CardContainer>
      <DesignButton>More</DesignButton>
    </Container>
  );
}

export default ProjectsComponent;
