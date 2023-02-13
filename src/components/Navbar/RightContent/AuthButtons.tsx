import { authModalState } from "@/src/atoms/authModalAtoms";
import { NavButton } from "@/src/styles/Navbar.styled";
import { useSetRecoilState } from "recoil";
import React from "react";

type AuthButtonsProps = {};

const AuthButtons: React.FC<AuthButtonsProps> = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  return (
    <>
      <NavButton
        outline={true}
        onClick={() => setAuthModalState({ open: true, view: "login" })}
      >
        Log In
      </NavButton>
      <NavButton
        onClick={() => setAuthModalState({ open: true, view: "signup" })}
      >
        Sign Up
      </NavButton>
    </>
  );
};
export default AuthButtons;
