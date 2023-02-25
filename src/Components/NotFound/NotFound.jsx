import React from "react";
import { Container, NotFoundButton } from "./StyledNotFound";
import { Link } from "react-router-dom";
import notFoundImage from "../../Assets/images/notFound.svg";
import { ROUTE_HOME_PAGE } from "../../Routes/Route";

function NotFound() {
  return (
    <Container>
      <img src={notFoundImage} alt="NotFound" />
      <Link to={ROUTE_HOME_PAGE}>
        <NotFoundButton>Back To Home</NotFoundButton>
      </Link>
    </Container>
  );
}

export default NotFound;
