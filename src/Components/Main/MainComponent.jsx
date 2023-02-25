import React from "react";
import image from "../../Assets/images/images.svg"
import Programmer from "../../Assets/images/Programmer.jpg"
import { Container, MainImage, ProgrammerImage } from "./StyledMainComponent";

function Main() {
  return (
<Container >
  <ProgrammerImage src={Programmer} alt="Programmer Image" />
  <h2>Programmer Name</h2>
  <h3> Front End Developer</h3>
<MainImage src={image} alt="Main Image" />
</Container>
    );}

export default Main;
