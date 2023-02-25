import React from "react";

import AboutComponent from "../Components/About/AboutComponent";
import FooterComponent from "../Components/Footer/FooterComponent";
import Main from "../Components/Main/MainComponent";

function HomePage() {
  return (
    <>
      <Main />
      <AboutComponent />
      <FooterComponent />
    </>
  );
}

export default HomePage;
