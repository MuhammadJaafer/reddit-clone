import { RightC } from "@/src/styles/Navbar.styled";
import React from "react";
import AuthButtons from "./AuthButtons";

type RightContentProps = {
  // user:
};

const RightContent: React.FC<RightContentProps> = () => {
  return (
    <>
      {/* <AuthModal /> */}
      <RightC>
        <AuthButtons />
      </RightC>
    </>
  );
};
export default RightContent;
