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
`;
export const Logo = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.2rem 0;
  & > svg {
    height: 55%;
  }
  & svg:first-child {
    height: 90%;
  }
  margin-right: 1rem;
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
    color: ${({ theme }) => theme.color_text};
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

export const IconsC = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
export const IconsBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.6rem;
  border-radius: 0.3rem;
  & svg {
    width: 2.3rem;
    height: 2.3rem;
    color: ${({ theme }) => theme.color_text};
  }
  &:hover {
    background: ${({ theme }) => theme.color_hover};
  }
  cursor: pointer;
`;
export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 1rem;
  border-right: 1px solid ${({ theme }) => theme.color_text_light};
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const MenuC = styled.div`
  & .menu_btn {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.6rem;
    border-radius: 0.3rem;
    &:hover {
      background: ${({ theme }) => theme.color_hover};
    }
    & > span {
      & .reddit-icon {
        width: 2.5rem;
        height: 2.5rem;
        color: ${({ theme }) => theme.color_text_light};
      }
      & .account-icon {
        width: 2.5rem;
        height: 2.5rem;
        color: ${({ theme }) => theme.color_text_light};
      }
      & .arrow-icon {
        width: 1.5rem;
        height: 1.5rem;
        color: ${({ theme }) => theme.color_text};
      }
    }
  }
  & .menu_list {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.3rem;
    background: ${({ theme }) => theme.color_tertiary};
    padding: 0.5rem 0;
    border-radius: 0.3rem;
    width: 50vw;
    max-width: 20rem;
  }
  & .menu_item {
    background: none;
    border: none;

    & > div {
      display: flex;
      align-items: center;
      justify-content: start;
      gap: 1rem;
      width: 100%;
      padding: 1rem;
      &:hover {
        background: ${({ theme }) => theme.color_hover};
      }
      & > svg {
        width: 2.5rem;
        height: 2.5rem;
        color: ${({ theme }) => theme.color_text};
      }
    }
  }
`;
export const MenuDev = styled.div`
  height: 1px;
  width: 95%;
  border-radius: 1rem;
  background: ${({ theme }) => theme.color_hover};
`;
