import React from "react";

import designsImage from "../../Assets/images/designs.svg";
import firstItemImage from "../../Assets/images/cm.gif";
import secondItemImage from "../../Assets/images/cm.gif";
import thirdItemImage from "../../Assets/images/cm.gif";
import forthItemImage from "../../Assets/images/cm.gif";
import {
  Container,
  //DesignButton,
  Header,
  Item,
  Items,
} from "./StyleDesignComponent";

function DesignsComponent() {
  const itemImages = [
    firstItemImage,
    secondItemImage,
    thirdItemImage,
    forthItemImage,
  ];
  return (
    <Container>
      <Header src={designsImage} />
      <Items>
        {itemImages.map((image, index) => (
          <Item src={image} alt={image} key={index} />
        ))}
      </Items>
      {/* for future and more projects and designs */}
      {/* <DesignButton>More</DesignButton> */}
    </Container>
  );
}

export default DesignsComponent;
