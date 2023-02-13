import { auth } from "@/src/firebase/clientApp";
import { Button } from "@/src/styles/GlobalStyles";
import { RightC } from "@/src/styles/Navbar.styled";
import { signOut, User } from "firebase/auth";
import React from "react";
import AuthModal from "../../Modal/Auth/AuthModal";
import AuthButtons from "./AuthButtons";
import Icons from "./Icons";
import UserMenu from "./UserMenu";

type RightContentProps = {
  user: User | null | undefined;
};

const RightContent: React.FC<RightContentProps> = ({ user }) => {
  return (
    <>
      <AuthModal open={false} />
      <RightC>
        {user ? <Icons /> : <AuthButtons />}
        <UserMenu user={user} />
      </RightC>
    </>
  );
};
export default RightContent;
