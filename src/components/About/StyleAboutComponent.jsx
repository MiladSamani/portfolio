import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
export const AboutHeader = styled.img``;
export const AboutDetail = styled.p`
  font-size: 1rem;
  color: #c5c8d4d4;
  width: 60vw;
  margin: 3rem 0.9rem;
  line-height: 1.5rem;
  @media screen and (max-width: 1200px) {
    width: 90vw;
  }
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
