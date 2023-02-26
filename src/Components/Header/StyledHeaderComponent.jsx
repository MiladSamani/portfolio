import styled from "styled-components";

export const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  border-bottom: 1px solid rgb(42 41 41);
  margin-bottom: 1.5rem;
  background-color: #131417;
`;
export const HeaderItems = styled.section`
  width: 92vw;
  margin: auto;
  display: flex;
  justify-content: space-between;
  padding: 8px;
`;
export const Logo = styled.img`
  width: 32px;
  animation: pulse 1.7s infinite;
  @keyframes pulse {
    50% {
      opacity: 0.6;
    }
  }
`;
export const CvBtn = styled.button`
  height: 2.5rem;
  border: 1px solid rgb(168 85 247);
  border-radius: 0.25rem;
  background-color: rgb(168 85 247/0.1);
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 600;
  color: rgb(156 163 175);
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
