import { auth } from "@/src/firebase/clientApp";
import {
  FlexColumn,
  NorText,
  FlexRow,
  LigText,
  BolText,
} from "@/src/styles/GlobalStyles";
import {
  Menu,
  MenuList,
  MenuButton,
  MenuItem,
  MenuItems,
  MenuPopover,
  MenuLink,
} from "@reach/menu-button";
import { MenuC, UserInfo, MenuDev } from "@/src/styles/Navbar.styled";
// import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/menu";
import { User } from "firebase/auth";
import React, { useRef, useState } from "react";
import { TiHome } from "react-icons/ti";
import { FiChevronDown } from "react-icons/fi";
import Communities from "./Communities";
import CreateCommunityModal from "../../Modal/CreateCommunity/CreateCommunityModal";
import useDirectory from "@/src/hooks/useDirectory";

type DirectoryProps = { user: User | null | undefined };

const Directory: React.FC<DirectoryProps> = ({ user }) => {
  const { directoryState, toggleMenuOpen } = useDirectory();
  const [open, setOpen] = useState(false);

  return (
    <>
      <MenuC isHome={directoryState.selectedMenuItem.isHome}>
        <Menu>
          <MenuButton className="menu_btn">
            {directoryState.selectedMenuItem.imageURL ? (
              <img src={directoryState.selectedMenuItem.imageURL}></img>
            ) : (
              <directoryState.selectedMenuItem.Icon />
            )}
            <BolText>{directoryState.selectedMenuItem.displayText}</BolText>
            <FiChevronDown className="arrow-icon" />
          </MenuButton>
          <MenuList className="menu_list directoryMenuList">
            <Communities open={open} setOpen={setOpen} />
          </MenuList>
        </Menu>
      </MenuC>
      <CreateCommunityModal open={open} setOpen={setOpen} />
    </>
  );
};
export default Directory;
