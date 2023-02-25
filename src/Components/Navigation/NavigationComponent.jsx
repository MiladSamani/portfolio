import React from "react";
import { NavigationUl } from "./StyledNavigationComponent";

function Navigation() {
  return (
    <>
      <NavigationUl>
      <li>Main</li>
        <li>About</li>
        <li>Designs</li>
        <li>Projects</li>
        <li>Contact</li>
      </NavigationUl>
    </>
  );
}

export default Navigation;
