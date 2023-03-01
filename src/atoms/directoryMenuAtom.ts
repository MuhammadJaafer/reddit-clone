import { IconType } from "react-icons";
import { TiHome } from "react-icons/ti";
import { atom } from "recoil";
import { useTheme } from "styled-components";

export type DirectoryMenuItem = {
  displayText: string;
  link: string;
  Icon: IconType;
  imageURL?: string;
  isHome?: boolean;
};

//const theme = useTheme();

interface DirectoryMenuState {
  isOpen: boolean;
  selectedMenuItem: DirectoryMenuItem;
}

export const defaultMenuItem: DirectoryMenuItem = {
  displayText: "Home",
  link: "/",
  Icon: TiHome,
  isHome: true,
};

export const defaultMenuState: DirectoryMenuState = {
  isOpen: false,
  selectedMenuItem: defaultMenuItem,
};

export const DirectoryMenuState = atom<DirectoryMenuState>({
  key: "directoryMenuState",
  default: defaultMenuState,
});
