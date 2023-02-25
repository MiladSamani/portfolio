import React from "react";

import AboutComponent from "../Components/About/AboutComponent";
import DesignsComponent from "../Components/Designs/DesignsComponent";
import FooterComponent from "../Components/Footer/FooterComponent";
import Main from "../Components/Main/MainComponent";

function HomePage() {
  return (
    <>
      <Main />
      <AboutComponent />
      <DesignsComponent />
      <FooterComponent />
    </>
  );
}

export default HomePage;
