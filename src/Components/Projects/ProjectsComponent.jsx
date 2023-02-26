import React, { useEffect, useState } from "react";
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
  //DesignButton,
  Header,
  CardButton,
  LeftButton,
  RightButton,
  ImageBtn,
} from "./StyleProjectsComponent";

import projectsImage from "../../Assets/images/projects.svg";

import githubImage from "../../Assets/images/github.svg";
import watchImage from "../../Assets/images/watchImage.svg";

import secondProject from "../../Assets/images/cm.gif";
import axios from "axios";

function ProjectsComponent() {
  const [data, setData] = useState([
    {
      image: "https://loremflickr.com/640/480/technics",
      title: "title 1",
      details: "details 1",
      tech1: "tech1 1",
      tech2: "tech2 1",
      tech3: "tech3 1",
      id: "1",
    },
    {
      image: "https://loremflickr.com/640/480/technics",
      title: "title 2",
      details: "details 2",
      tech1: "tech1 2",
      tech2: "tech2 2",
      tech3: "tech3 2",
      id: "2",
    },
  ]);



  return (
    <Container>
      <Header src={projectsImage} />
      <CardContainer>
        
{data.map((d)=>(
  <Card>
          <CardImage src={secondProject} />
          <CardDetails>
            <CardTitle>{d.title}</CardTitle>
            <CardLine />
            <CardDescription>{d.details}</CardDescription>
          </CardDetails>
          <CardTechnologies>
            Technologies: / <span className="blue"> {d.tech1}</span> /
            <span className="red"> {d.tech2} </span> /
            <span className="orange"> {d.tech3} </span>
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
))}
      </CardContainer>
      {/* for future and more projects and designs */}
      {/* <DesignButton>More</DesignButton> */}
    </Container>
  );
}

export default ProjectsComponent;
