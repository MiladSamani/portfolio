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

export const CardContainer = styled.div`
  width: 64%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 80px;
  row-gap: 20px;

  @media screen and (max-width: 768px) {
    width: 75%;
    grid-template-columns: 1fr;
    column-gap: 20px;
  }
  @media (min-width: 769px) and (max-width: 992px) {
    width: 85%;
    column-gap: 20px;
  }
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #1d1e22;
  border-radius: 0 0 0.375rem 0.375rem;
`;
export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 0.375rem;
`;
export const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;
export const CardLine = styled.hr`
  width: 60%;
  border: 0;
  margin: 0;
  height: 1px;
  background: #9333ea;
`;
export const CardTitle = styled.h3`
  color: #d0cdcd;
  font-size: 1.25rem;
`;
export const CardDescription = styled.p`
  color: #d0cdcd80;
  font-size: 14px;
  padding: 0.5rem;
`;
export const CardTechnologies = styled.p`
  margin: 1rem;
  margin-bottom: 0;
  font-weight: 400;
  color: rgb(208 205 205/0.83);

  .blue {
    color: #6fc7e8;
  }
  .orange {
    color: #d16d01;
  }
  .green {
    color: #74b078;
  }
  .purple {
    color: #b997fa;
  }
  .red {
    color: #ee4c4a;
  }
`;

export const CardButton = styled.div`
  display: flex;
  margin: 1rem;
  margin-top: 0.5rem;
  gap: 0.5rem;
`;
export const LeftButton = styled.button`
  outline: none;
  padding: 0.2rem 1.6rem;
  background-color: rgb(197 200 212/0.15);
  border: 1px solid white;
  border-radius: 5px;
  cursor: pointer;
`;
export const RightButton = styled.button`
  outline: none;
  padding: 0.2rem 1.6rem;
  background-color: rgb(197 200 212/0.15);
  border: 1px solid white;
  border-radius: 5px;
  cursor: pointer;
`;
export const ImageBtn = styled.img`
  width: 1rem;
`;
export const DesignButton = styled.button`
  outline: none;
  height: 2.25rem;
  width: 7rem;
  border: 1px solid #9333ea;
  border-radius: 0.25rem;
  background-color: rgb(147 51 234/0.15);
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
