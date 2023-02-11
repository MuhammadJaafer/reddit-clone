import { Logo, Nav } from "@/src/styles/Navbar.styled";
import React from "react";
import RedditLogo from "../../../public/images/Reddit-Logo.svg";
import RightContent from "./RightContent/RightContent";
import SearchInput from "./SearchInput";
const Navbar: React.FC = () => {
  return (
    <Nav>
      <Logo>
        <img src="/images/redditFace.svg" alt="reddit logo" />
        <img src="/images/redditText.svg" alt="reddit text logo" />
      </Logo>
      {/* <Directory />
       */}
      <SearchInput />
      <RightContent />
    </Nav>
  );
};
export default Navbar;
