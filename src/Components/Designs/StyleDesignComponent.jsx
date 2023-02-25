import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 45px;
  align-items: center;
  margin: 90px 0;
`;
export const Header = styled.img``;
export const Items = styled.div`
  width: 75%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 50px;
  row-gap: 20px;
  @media screen and (max-width: 992px) {
    width: 85%;
    justify-items: center;
    grid-template-columns: 1fr;
    column-gap: 20px;
  }
`;
export const Item = styled.img`
  width: 90%;
  height: 100%;
  border-left: 4px solid #ff4c00;
  border-radius: 0.375rem;
  transition: all 500ms;
  cursor: pointer;
  :hover {
    transform: scale(1.05);
  }
`;
export const DesignButton = styled.button`
  outline: none;
  height: 2.25rem;
  width: 7rem;
  border: 1px solid #ff4c00;
  border-radius: 0.25rem;
  background-color: rgb(255 76 0/0.15);
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 600;
  color: rgb(156 163 175);
  cursor: pointer;
  :hover {
    color: #fff;
  }
`;
