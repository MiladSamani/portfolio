import styled from "styled-components";

export const Nav = styled.ul`
  width: 37vw;
  list-style-type: none;
  display: flex;
  justify-content: flex-end;
  gap: 40px;
  margin-top: 0.5rem;

  li {
    a {
      cursor: pointer;
      font-size: 1rem;
      line-height: 1.5rem;
      font-weight: 500;
      color: rgb(107 114 128);
      text-decoration: none;
    }
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
