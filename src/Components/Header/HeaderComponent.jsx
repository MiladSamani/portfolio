import React, { useState } from "react";
import NavigationComponent from "../Navigation/NavigationComponent";
import { CvBtn, Header, HeaderItems, Logo } from "./StyledHeaderComponent";

import logo from "../../Assets/images/logo.svg";
import HamburgerComponent from "../Hamburger/HamburgerComponent";

function HeaderComponent() {
  const [open, setOpen] = useState(false);

  return (
    <Header>
      <HeaderItems>
        <Logo src={logo} />
        <NavigationComponent open={open} setOpen={setOpen} />
        <HamburgerComponent open={open} setOpen={setOpen} />
        <CvBtn>Download CV</CvBtn>
      </HeaderItems>
    </Header>
  );
}

export default HeaderComponent;
