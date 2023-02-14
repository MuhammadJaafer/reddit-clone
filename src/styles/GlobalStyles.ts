import { createGlobalStyle, css } from "styled-components";
import styled from "styled-components";
import { rotate } from "./Animations.styled";
interface IBtn {
  outline?: boolean;
  size?: string;
  loading?: boolean;
}
interface IFlex {
  gap: string;
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
`;
export const Button = styled.button<IBtn>`
  position: relative;
  font-family: inherit;
  display: flex;
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
      ? css`
          & svg {
            color: ${({ theme }) => theme.color_hover};
            animation: ${rotate} 0.6s infinite linear;
            position: relative;
            width: 2.5rem;
            height: 2.5rem;
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
  gap: ${(props) => props.gap};
`;
export const NorText = styled.span`
  color: ${({ theme }) => theme.color_text};
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
export default GlobalStyles;
