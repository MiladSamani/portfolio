import React from "react";
import { Nav } from "./StyledNavigationComponent";

function NavigationComponent({ open, setOpen }) {
  return (
    <Nav open={open}>
      <li>
        <a href="#">Main</a>
      </li>
      <li>
        <a href="#">About</a>
      </li>
      <li>
        <a href="#">Designs</a>
      </li>
      <li>
        <a href="#">Projects</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
    </Nav>
  );
}

export default NavigationComponent;
