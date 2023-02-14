import { auth } from "@/src/firebase/clientApp";
import {
  FlexColumn,
  NorText,
  FlexRow,
  LigText,
  BolText,
} from "@/src/styles/GlobalStyles";
import { MenuC, UserInfo, MenuDev } from "@/src/styles/Navbar.styled";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/menu";
import { User } from "firebase/auth";
import React, { useState } from "react";
import { TiHome } from "react-icons/ti";
import { FiChevronDown } from "react-icons/fi";
import Communities from "./Communities";
import CreateCommunityModal from "../../Modal/CreateCommunity/CreateCommunityModal";

type DirectoryProps = { user: User | null | undefined };

const Directory: React.FC<DirectoryProps> = ({ user }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <MenuC>
        <Menu closeOnSelect={false}>
          <MenuButton className="menu_btn">
            <TiHome />
            <BolText>Home</BolText>
            <FiChevronDown className="arrow-icon" />
          </MenuButton>
          <MenuList className="menu_list">
            <Communities open={open} setOpen={setOpen} />
          </MenuList>
        </Menu>
      </MenuC>
      <CreateCommunityModal open={open} setOpen={setOpen} />
    </>
  );
};
export default Directory;
