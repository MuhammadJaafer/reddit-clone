import { NavButton } from "@/src/styles/Navbar.styled";
import React from "react";

type AuthButtonsProps = {};

const AuthButtons: React.FC<AuthButtonsProps> = () => {
  return (
    <>
      <NavButton outline={true}>Log In</NavButton>
      <NavButton>Sign Up</NavButton>
    </>
  );
};
export default AuthButtons;
