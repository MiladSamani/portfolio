import React from "react";
import {
  LeftText,
  //RightText,
  StyledFooter,
} from "./StyleFooterComponent";

function FooterComponent() {
  return (
    <StyledFooter>
      <LeftText>Copyright 2023 © Milad Samani & Sina Khorsandi </LeftText>
      {/* Email Address */}
      {/* <RightText>
        <span>Mail: </span>
        sinakhorsandi.dev@gmail.com
      </RightText> */}
    </StyledFooter>
  );
}

export default FooterComponent;
