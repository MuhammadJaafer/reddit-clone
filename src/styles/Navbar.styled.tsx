import styled from "styled-components";

interface IBtn {
  outline?: any;
}

export const Nav = styled.nav`
  height: 5rem;
  padding: 0.5rem 1.2rem;
  background: ${({ theme }) => theme.color_tertiary};
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;
`;
export const Logo = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0.2rem 0;
  & img {
    height: 100%;
  }
  & img:last-child {
    height: 150%;
  }
`;

export const SearchC = styled.form`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  & input {
    font-family: inherit;
    font-size: inherit;
    background-color: ${({ theme }) => theme.color_tertiary_light};
    border: none;
    padding: 1rem;
    border-radius: 10rem;
    width: 100%;
    height: 100%;
    padding-left: 4rem;
    &:focus {
      outline: none;
      border: 1px solid ${({ theme }) => theme.color_secondary};
    }
    &::-webkit-input-placeholder {
      font-weight: 300;
      color: ${({ theme }) => theme.color_tertiary_dark};
    }
  }
  & button {
    border: none;
    background: none;
    cursor: pointer;
  }
  & svg {
    position: relative;
    height: 2.5rem;
    width: 2.5rem;
    color: ${({ theme }) => theme.color_text_light};
    margin-right: -4.5rem;
    z-index: 2;
  }
`;

export const RightC = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const NavButton = styled.button<IBtn>`
  font-family: inherit;
  color: ${(props) =>
    props.outline ? props.theme.color_secondary : props.theme.color_tertiary};
  background: ${(props) =>
    props.outline ? props.theme.color_tertiary : props.theme.color_secondary};
  border: 1px solid ${({ theme }) => theme.color_secondary};
  border-radius: 10rem;
  padding: 0.8rem 1.2rem;
  font-weight: 700;
  cursor: pointer;
  margin: 0 0.5rem;
`;
