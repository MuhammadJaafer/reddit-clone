import {
  Button,
  FlexRow,
  NorText,
  SwitchButton,
} from "@/src/styles/GlobalStyles";
import { MenuC, MenuDev } from "@/src/styles/Navbar.styled";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { signOut, User } from "firebase/auth";
import React from "react";
import { FiChevronDown } from "react-icons/fi";
import { FaRedditSquare, FaRegMoon } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { CgProfile } from "react-icons/cg";
import { MdOutlineLogin } from "react-icons/md";
import { auth } from "@/src/firebase/clientApp";
import { useRecoilState, useSetRecoilState } from "recoil";
import { authModalState } from "@/src/atoms/authModalAtoms";
import { ThemeState } from "@/src/atoms/themeAtoms";
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
  return (
    <MenuC>
      <Menu closeOnSelect={false}>
        <MenuButton className="menu_btn">
          {user ? (
            <FlexRow gap="0.5rem">
              <FaRedditSquare className="reddit-icon" />
              <FiChevronDown className="arrow-icon" />
            </FlexRow>
          ) : (
            <FlexRow gap="0.5rem">
              <VscAccount className="account-icon" />
              <FiChevronDown className="arrow-icon" />
            </FlexRow>
          )}
        </MenuButton>
        <MenuList className="menu_list">
          {user ? (
            <>
              {" "}
              <MenuItem className="menu_item">
                <div>
                  <CgProfile />
                  <NorText>Profile</NorText>
                </div>
              </MenuItem>
              <MenuItem className="menu_item">
                <div>
                  <FaRegMoon />
                  <NorText>Dark Mood</NorText>
                  <SwitchButton>
                    <input
                      type="checkbox"
                      defaultChecked={themeState.darkMode}
                      onChange={handleTheme}
                    />
                    <span className="slider round"></span>
                  </SwitchButton>
                </div>
              </MenuItem>
              <MenuDev />
              <MenuItem
                className="menu_item"
                onClick={() => {
                  signOut(auth);
                }}
              >
                <div>
                  <MdOutlineLogin />
                  <NorText>Log Out</NorText>
                </div>
              </MenuItem>
            </>
          ) : (
            <>
              <MenuDev />
              <MenuItem
                className="menu_item"
                onClick={() => {
                  setAuthModalState({ open: true, view: "login" });
                }}
              >
                <div>
                  <MdOutlineLogin />
                  <NorText> Log In / Sign Up</NorText>
                </div>
              </MenuItem>
            </>
          )}
        </MenuList>
      </Menu>
    </MenuC>
  );
};
export default UserMenu;
