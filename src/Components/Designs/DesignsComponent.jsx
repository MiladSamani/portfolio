import React from "react";

import designsImage from "../../Assets/images/designs.svg";
import firstItemImage from "../../Assets/images/firstItemImage.png";
import secondItemImage from "../../Assets/images/secondItemImage.png";
import thirdItemImage from "../../Assets/images/thirdItemImage.png";
import forthItemImage from "../../Assets/images/forthItemImage.png";
import {
  Container,
  DesignButton,
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
      <DesignButton>More</DesignButton>
    </Container>
  );
}

export default DesignsComponent;
