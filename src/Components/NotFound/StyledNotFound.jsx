import styled from "styled-components";

export const Container = styled.div`
  width: 450px;
  height: 450px;
  margin: 4rem auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const NotFoundButton = styled.button`
  outline: none;
  width: 12rem;
  border: 1px solid rgb(179 202 255);
  border-radius: 0.25rem;
  background-color: rgb(179 202 255/0.15);
  color: #fff;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: normal;
  cursor: pointer;
  :hover {
    color: #407bff;
  }
`;
