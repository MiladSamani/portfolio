import styled from "styled-components";

export const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  div {
    width: calc(100% / 3);
  }
  .one {
    text-align: center;
  }
  .two {
    text-align: center;
  }
  .three {
    text-align: center;
  }
  border-bottom: 2px solid #202126fc;
  position: sticky;
  margin: 20px 0px;
  padding-bottom: 10px;
`;

export const Logo = styled.img`
  animation: pulse 2s infinite;
  @keyframes pulse {
    0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
    }

    70% {
      transform: scale(1);
      box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
    }

    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
  }
`;

export const CvBtn = styled.button`
  background-color: #221b2e;
  border: #a855f7 solid 2px;
  border-radius: 5px;
  padding: 10px 20px;
  color: #aaaeb5;
  text-align: center;
  text-decoration: none;
  font-size: 14px;
  transition-duration: 0.4s;
  cursor: pointer;
`;
