import styled from "styled-components";
import { BolText, Button, FlexColumn, FlexRow, LigText } from "./GlobalStyles";
interface IModal {
  open: boolean;
}
export const ModalC = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${({ theme }) => theme.color_tertiary};
  width: 100vw;
  max-width: 60rem;
  border-radius: 1rem;
  z-index: 10;
  color: ${({ theme }) => theme.color_text};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  overflow: hidden;
  & h2 {
    text-align: center;
    margin: 1rem 0;
  }
  & > svg {
    color: ${({ theme }) => theme.color_text};
    width: 3.5rem;
    height: 3.5rem;
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
  }
`;
export const ModalOverlay = styled.div<IModal>`
  display: ${(props) => (props.open ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  width: 100vw;
  height: 100vh;
  z-index: 10;
`;

export const FormC = styled.div`
  width: 100%;
  gap: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 30rem;
  text-align: center;
  & > svg {
    height: 5rem;
    width: 5rem;
    color: #ff4500;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  text-align: center;
  gap: 1rem;
  & input {
    font-family: inherit;
    font-size: inherit;
    width: 100%;
    border: 1px solid ${({ theme }) => theme.color_text_light};
    padding: 1rem 2rem;
    border-radius: 10rem;
    background-color: ${({ theme }) => theme.color_tertiary_light};
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
    flex: 1 1;
  }
`;

export const ModalBody = styled.div`
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  & ${FlexColumn} {
    text-align: left;
    align-items: start;

    & ${BolText} {
      font-size: 1.7rem !important;
    }
    & ${LigText} {
      font-size: 1.3rem !important;
    }
  }
`;

export const ModalFooter = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: end;
  gap: 1rem;
  background: ${({ theme }) => theme.color_tertiary_light};
  padding: 1.3rem;
  & ${Button} {
    min-width: 12rem;
  }
`;

export const CommunityInput = styled.div`
  margin: 1rem 0;
  & > input {
    font-family: inherit;
    font-size: inherit;
    width: 80%;
    border: 1px solid ${({ theme }) => theme.color_text_light};
    padding: 1rem;
    padding-left: 2.5rem;
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.color_tertiary_light};
    &:focus {
      outline: none;
      border: 1px solid ${({ theme }) => theme.color_secondary};
    }
    &::-webkit-input-placeholder {
      font-weight: 300;
      color: ${({ theme }) => theme.color_tertiary_dark};
    }
  }
  & ${LigText} {
    position: relative;
    margin-right: -2.5rem;
    z-index: 5;
  }
`;

export const CommunityType = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 1rem;
`;

export const CheckBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  & > svg {
    color: ${({ theme }) => theme.color_tertiary_dark};
    width: 2.2rem;
    height: 2.2rem;
    margin: 0 0.3rem;
  }
  & > input {
    width: 2rem;
    height: 2rem;
  }
  & ${FlexRow} {
    align-items: center;
    gap: 0.5rem;
  }
  & ${LigText} {
    font-size: 1rem !important;
    align-self: end;
  }
`;
