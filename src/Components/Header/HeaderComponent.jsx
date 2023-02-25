import React from "react";
import Navigation from "../Navigation/NavigationComponent";
import { CvBtn, HeaderStyle, Logo } from "./StyledHeaderComponent";
import LogoSrc from "../../Assets/images/logo.svg";

function Header() {
  return (
    <>
      <HeaderStyle>
        <div className="one">
          <Logo src={LogoSrc} />
        </div>
        <div className="two">
          <Navigation />
        </div>
        <div className="three">
          <CvBtn>Download Cv</CvBtn>
        </div>
      </HeaderStyle>
    </>
  );
}

export default Header;
