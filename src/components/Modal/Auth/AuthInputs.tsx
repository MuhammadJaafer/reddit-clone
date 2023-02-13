import { authModalState } from "@/src/atoms/authModalAtoms";
import { FormC } from "@/src/styles/Modal.styled";
import React from "react";
import { useRecoilValue } from "recoil";
import Login from "./Login";
import SignUp from "./SignUp";

type AuthInputsProps = {};

const AuthInputs: React.FC<AuthInputsProps> = () => {
  const modalState = useRecoilValue(authModalState);
  return (
    <FormC>
      {modalState.view === "login" && <Login />}
      {modalState.view === "signup" && <SignUp />}
    </FormC>
  );
};
export default AuthInputs;
