import styled from "styled-components";
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
  max-width: 50rem;
  border-radius: 1rem;
  z-index: 10;
  color: ${({ theme }) => theme.color_text};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
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
