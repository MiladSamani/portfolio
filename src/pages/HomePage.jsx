import React from "react";

import AboutComponent from "../Components/About/AboutComponent";
import FooterComponent from "../Components/Footer/FooterComponent";
import Header from "../Components/Header/HeaderComponent";
import Main from "../Components/Main/MainComponent";

function HomePage() {
  return (
    <>
      <Header />
      <Main />
      <AboutComponent />
      <FooterComponent />
    </>
  );
}

export default HomePage;
