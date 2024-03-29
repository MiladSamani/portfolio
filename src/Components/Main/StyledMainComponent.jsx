import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ProgrammerImage = styled.img`
  height: 7rem;
  width: 7rem;
  border-radius: 100%;
  border: 2px solid #a855f7;
`;
export const About = styled.div`
  text-align: center;
  h2 {
    color: hsla(0, 2%, 90%, 0.77);
    font-weight: lighter;
  }
  h3 {
    color: rgb(118 218 255/0.83);
    font-weight: lighter;
    margin-bottom: 10px;
  }
`;
export const MainImage = styled.img`
  width: 73vw;
  @media screen and (max-width: 576px) {
    width: 100vw;
    margin-bottom: 20px;
  @media screen and (max-width: 992px) {
    width: 100vw;

  }
`;
export const SocialIcons = styled.div`
  display: flex;
  gap: 5px;
`;

export const SocialMedia = styled.img`
  cursor: pointer;
  padding: 5px 30px;
  border: 1px solid #4b494e;
  background-color: rgb(197 200 212/0.15);
  border-radius: 6px;
  @media screen and (max-width: 992px) {
    padding: 5px 20px;
  }
`;
