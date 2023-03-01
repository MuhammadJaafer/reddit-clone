import styled from "styled-components";

export const PageLayout = styled.div`
  display: flex;
  margin: 2rem auto;
  width: 100%;
  max-width: 100rem;
  gap: 1.5rem;
  padding: 0 2rem;
`;
export const Lhs = styled.div`
  flex: 1;
  position: relative;
`;
export const Rhs = styled.div`
  width: 35%;
  @media screen and (max-width: 800px) {
    display: none;
    position: relative;
  }
`;
