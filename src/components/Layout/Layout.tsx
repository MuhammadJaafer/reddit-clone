import { authModalState } from "@/src/atoms/authModalAtoms";
import { auth } from "@/src/firebase/clientApp";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Navbar from "../Navbar/Navbar";

type LayoutProps = { children: React.ReactNode };

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <>
      <Navbar user={user} />
      <main>{children}</main>
    </>
  );
};
export default Layout;
