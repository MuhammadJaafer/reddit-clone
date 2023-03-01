import { createGlobalStyle, css } from "styled-components";
import styled from "styled-components";
import { rotate } from "./Animations.styled";
interface IBtn {
  outline?: boolean;
  size?: string;
  loading?: boolean;
}
interface IFlex {
  gap?: string;
}

const GlobalStyles = createGlobalStyle`
:root {
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
html{
  font-size: 62.5%;
  @media screen and (max-width:500px) {
    font-size: 45%;
    
  }
}
html,
body {
  max-width: 100vw;
  overflow-x: hidden;
}

body {
  font-size: 1.5rem;
  font-family: 'Roboto Mono', monospace;
  font-weight: 400;
  background: ${({ theme }) => theme.color_body};
  transition: all 0.3s;
}

a {
  color: inherit;
  text-decoration: none;
}
input {
  color: ${({ theme }) => theme.color_text};
}
body{

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
    position: relative;
    z-index: 100;
  }

  & .menu_item {
    background: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: start;
    cursor: pointer;
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
  & .menu_item2 {
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 1rem;
    width: 100%;
    padding: 1rem;
    &:hover {
       background: ${({ theme }) => theme.color_hover};
    }
    & svg,
      img {
        width: 3rem;
        height: 3rem;
        color: ${({ theme }) => theme.color_secondary};
        border-radius: 50%;
        object-fit: cover;
      }
  }
}
`;
export const Button = styled.button<IBtn>`
  font-family: inherit;
  position: relative;
  display: flex;
  height: 4rem;
  align-items: center;
  justify-content: center;
  color: ${(props) =>
    props.outline ? props.theme.color_secondary : props.theme.color_tertiary};
  background: ${(props) =>
    props.outline ? props.theme.color_tertiary : props.theme.color_secondary};
  border: 2px solid ${({ theme }) => theme.color_secondary};
  border-radius: 10rem;
  padding: ${(props) => (props.size === "l" ? "1.5rem 2rem" : "0.8rem 1.2rem")};
  font-weight: 700;
  cursor: pointer;
  margin: 0 0.5rem;
  ${(props) =>
    props.loading
      ? props.outline
        ? css`
            & > svg {
              color: ${({ theme }) => theme.color_secondary};
              animation: ${rotate} 0.6s infinite linear;
              position: relative;
              width: 2.5rem !important;
              height: 2.5rem !important;
            }
          `
        : css`
            & > svg {
              color: ${({ theme }) => theme.color_hover};
              animation: ${rotate} 0.6s infinite linear;
              position: relative;
              width: 2.5rem !important;
              height: 2.5rem !important;
            }
          `
      : ""}
`;
export const OAuthButton = styled.button<IBtn>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-family: inherit;
  color: ${({ theme }) => theme.color_text};
  background: ${({ theme }) => theme.color_tertiary};
  border: 2px solid ${({ theme }) => theme.color_text_light};
  border-radius: 10rem;
  padding: 1rem 4rem;
  width: 100%;
  max-width: 30rem;
  font-weight: 700;
  cursor: pointer;
  margin: 0 0.5rem;
  & img {
    width: 2rem;
    height: 2rem;
  }
  ${(props) =>
    props.loading
      ? css`
          opacity: 0.7;
          & svg {
            color: ${props.theme.color_text};
            animation: ${rotate} 0.6s infinite linear;
            position: relative;
            width: 2.5rem;
            height: 2.5rem;
          }
        `
      : ""}
`;
export const FlexColumn = styled.div<IFlex>`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  gap: ${(props) => props.gap};
`;

export const FlexRow = styled.div<IFlex>`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: ${(props) => props.gap && "0rem"};
`;
export const NorText = styled.span`
  color: ${({ theme }) => theme.color_text};
`;
export const LinkText = styled.span`
  color: ${({ theme }) => theme.color_secondary};
`;
export const ImpText = styled.span`
  color: ${({ theme }) => theme.color_secondary};
  font-weight: 700;
  text-decoration: underline;
  cursor: pointer;
`;
export const BolText = styled.span`
  font-weight: 700;
  font-size: 1.4rem !important;
  color: ${({ theme }) => theme.color_text};
`;
export const ErrorText = styled.span`
  color: red;
  font-size: 1.3rem;
`;

export const LigText = styled.span`
  color: ${({ theme }) => theme.color_text_light};
`;

export const SwitchButton = styled.label`
  position: relative;
  display: inline-block;
  width: 5rem;
  height: 2.6rem;

  & > input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  & > span {
    position: absolute;
    cursor: pointer;
    border-radius: 3rem;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.color_tertiary_dark};
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
  & > span::before {
    position: absolute;
    content: "";
    border-radius: 50%;
    height: 2.2rem;
    width: 2.2rem;
    left: 3px;
    bottom: 2px;
    background-color: ${({ theme }) => theme.color_tertiary};
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
  & input:checked + .slider {
    background-color: ${({ theme }) => theme.color_secondary};
  }
  & input:focus + .slider {
    box-shadow: 0 0 1px ${({ theme }) => theme.color_secondary};
  }
  & input:checked + .slider:before {
    -webkit-transform: translateX(2.2rem);
    -ms-transform: translateX(2.2rem);
    transform: translateX(2.2rem);
  }
`;

export const TextInput = styled.input`
  font-family: inherit;
  font-size: inherit;
  background-color: ${({ theme }) => theme.color_tertiary_light};
  border: 1px solid ${({ theme }) => theme.color_hover};
  padding: 0.5rem;
  border-radius: 0.5rem;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.color_text};
  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.color_secondary};
  }
  &::-webkit-input-placeholder {
    font-weight: 300;
    color: ${({ theme }) => theme.color_tertiary_dark};
  }
`;
export const TextAreaInput = styled.textarea`
  resize: vertical;
  font-family: inherit;
  font-size: inherit;
  background-color: ${({ theme }) => theme.color_tertiary_light};
  border: 1px solid ${({ theme }) => theme.color_hover};
  padding: 0.5rem;
  border-radius: 0.5rem;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.color_text};
  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.color_secondary};
  }
  &::-webkit-input-placeholder {
    font-weight: 300;
    color: ${({ theme }) => theme.color_tertiary_dark};
  }
`;
export const TitleBox = styled.div`
  padding: 1.5rem 0.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.color_tertiary};
  margin-top: 3rem;
  & ${NorText} {
    font-weight: 500;
    font-size: 1.8rem;
  }
  margin-bottom: 3rem;
`;

export const ErrorC = styled.div`
  width: 100%;
  max-width: 100rem;
  height: 6rem;
  padding: 2rem;
  gap: 1rem;
  display: flex;
  align-items: center;
  justify-content: start;
  background: #ff000050;
  color: #ff0000cc;
  & > svg {
    width: 3rem;
    height: 3rem;
    color: currentColor;
  }
`;

export const Loader = styled.div`
  & > svg {
    animation: ${rotate} 0.5s infinite linear;
    color: ${({ theme }) => theme.color_text_light};
  }
`;
export const MorePosts = styled(Button)`
  margin: 0 auto;
`;
export default GlobalStyles;
