import React from "react";
import { StyledBurger } from "./StyledHamburgerComponent";

function HamburgerComponent({ open, setOpen }) {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <span />
      <span />
      <span />
    </StyledBurger>
  );
}

export default HamburgerComponent;
