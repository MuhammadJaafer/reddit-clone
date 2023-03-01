import {
  Button,
  FlexColumn,
  FlexRow,
  LigText,
  NorText,
} from "@/src/styles/GlobalStyles";
import { MenuC, MenuDev, UserInfo } from "@/src/styles/Navbar.styled";
import {
  Menu,
  MenuList,
  MenuButton,
  MenuItem,
  MenuItems,
  MenuPopover,
  MenuLink,
} from "@reach/menu-button";
import { signOut, User } from "firebase/auth";
import React from "react";
import { FiChevronDown } from "react-icons/fi";
import { FaRedditSquare, FaRegMoon } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { CgProfile } from "react-icons/cg";
import { MdOutlineLogin } from "react-icons/md";
import { auth } from "@/src/firebase/clientApp";
import { useRecoilState, useResetRecoilState, useSetRecoilState } from "recoil";
import { authModalState } from "@/src/atoms/authModalAtoms";
import { ThemeState } from "@/src/atoms/themeAtoms";
import SwitchButton from "./SwitchButton";
import { IoSparkles } from "react-icons/io5";
import { communityState } from "@/src/atoms/communitiesAtom";
type UserMenuProps = {
  user?: User | null;
};

const UserMenu: React.FC<UserMenuProps> = ({ user }) => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const [themeState, setThemeState] = useRecoilState(ThemeState);
  const handleTheme = () => {
    localStorage.setItem("theme", themeState.darkMode ? "false" : "true");
    setThemeState({ darkMode: !themeState.darkMode });
  };
  let userName = user?.displayName || user?.email?.split("@")[0] || "userName";
  if (userName.length > 15) userName = userName.slice(0, 15) + "...";

  const logout = async () => {
    await signOut(auth);
  };
  return (
    <MenuC>
      <Menu className="menu">
        <MenuButton className="menu_btn">
          {user ? (
            <UserInfo>
              <FaRedditSquare className="reddit-icon" />
              <FlexColumn gap="0.2rem">
                <NorText>{userName}</NorText>
                <FlexRow gap="0.2rem">
                  <IoSparkles />
                  <LigText>1 Karma</LigText>
                </FlexRow>
              </FlexColumn>
            </UserInfo>
          ) : (
            <FlexRow gap="0.5rem">
              <VscAccount className="account-icon" />
            </FlexRow>
          )}
          <FiChevronDown className="arrow-icon" />
        </MenuButton>
        <MenuList className="menu_list">
          {user ? (
            <>
              <MenuItem onSelect={() => {}} className="menu_item">
                <CgProfile />
                <NorText>Profile</NorText>
              </MenuItem>
              <MenuItem onSelect={() => {}} className="menu_item">
                <FaRegMoon />
                <NorText>Dark Mood</NorText>

                <SwitchButton
                  handleChange={handleTheme}
                  value={themeState.darkMode}
                />
              </MenuItem>
              <MenuDev />
              <MenuItem
                onSelect={() => {}}
                className="menu_item"
                onClick={() => {
                  logout();
                }}
              >
                <MdOutlineLogin />
                <NorText>Log Out</NorText>
              </MenuItem>
            </>
          ) : (
            <>
              <MenuItem onSelect={() => {}} className="menu_item">
                <FaRegMoon />
                <NorText>Dark Mood</NorText>

                <SwitchButton
                  handleChange={handleTheme}
                  value={themeState.darkMode}
                />
              </MenuItem>
              <MenuDev />
              <MenuItem
                onSelect={() => {}}
                className="menu_item"
                onClick={() => {
                  setAuthModalState({ open: true, view: "login" });
                }}
              >
                <MdOutlineLogin />
                <NorText> Log In / Sign Up</NorText>
              </MenuItem>
            </>
          )}
        </MenuList>
      </Menu>
    </MenuC>
  );
};
export default UserMenu;
