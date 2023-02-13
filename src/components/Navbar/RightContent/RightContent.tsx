import { auth } from "@/src/firebase/clientApp";
import { Button } from "@/src/styles/GlobalStyles";
import { RightC } from "@/src/styles/Navbar.styled";
import { signOut } from "firebase/auth";
import React from "react";
import AuthModal from "../../Modal/Auth/AuthModal";
import AuthButtons from "./AuthButtons";

type RightContentProps = {
  user: any;
};

const RightContent: React.FC<RightContentProps> = ({ user }) => {
  return (
    <>
      <AuthModal open={false} />
      <RightC>
        {user ? (
          <Button
            onClick={() => {
              signOut(auth);
            }}
          >
            Logout
          </Button>
        ) : (
          <AuthButtons />
        )}
      </RightC>
    </>
  );
};
export default RightContent;
