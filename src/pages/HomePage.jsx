import React from "react";

import AboutComponent from "../Components/About/AboutComponent";
import DesignsComponent from "../Components/Designs/DesignsComponent";
import FooterComponent from "../Components/Footer/FooterComponent";
import HamburgerComponent from "../Components/Hamburger/HamburgerComponent";
import Header from "../Components/Header/HeaderComponent";
import Main from "../Components/Main/MainComponent";
import ProjectsComponent from "../Components/Projects/ProjectsComponent";

function HomePage() {
  return (
    <>
      {/* <HamburgerComponent /> */}
      <Header />
      <Main />
      <AboutComponent />
      <DesignsComponent />
      <ProjectsComponent />
      <FooterComponent />
    </>
  );
}

export default HomePage;
