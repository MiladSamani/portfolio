import styled from "styled-components";

export const StyledFooter = styled.footer`
  height: 3.5rem;
  background-color: #1b1b1f;
  opacity: 0.99;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  border: 2px solid #2a2929;

  @media screen and (max-width: 576px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;
export const LeftText = styled.div`
  color: #c5c8d4d4;
  font-size: 0.9rem;
`;
export const RightText = styled.div`
  color: #c5c8d4d4;
  font-size: 0.9rem;
  span {
    color: var(--blue);
    font-size: 0.95rem;
  }
`;
