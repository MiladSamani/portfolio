import React from "react";
import { LeftText, RightText, StyledFooter } from "./StyleFooterComponent";

function FooterComponent() {
  return (
    <StyledFooter>
      <LeftText>Design & Develop , Sina & Milad</LeftText>
      <RightText>
        <span>Mail: </span>
        sinakhorsandi.dev@gmail.com
      </RightText>
    </StyledFooter>
  );
}

export default FooterComponent;
