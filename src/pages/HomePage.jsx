import React from "react";

import AboutComponent from "../Components/About/AboutComponent";
import DesignsComponent from "../Components/Designs/DesignsComponent";
import FooterComponent from "../Components/Footer/FooterComponent";
import Main from "../Components/Main/MainComponent";
import ProjectsComponent from "../Components/Projects/ProjectsComponent";

function HomePage() {
  return (
    <>
      <Main />
      <AboutComponent />
      <DesignsComponent />
      <ProjectsComponent />
      <FooterComponent />
    </>
  );
}

export default HomePage;
