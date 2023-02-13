import { atom } from "recoil";
import { darkTheme } from "../styles/Themes";

export interface themeState {
  darkMode: boolean;
}
let defaultDarkMode: boolean = false;

const defaultThemeState: themeState = {
  darkMode: defaultDarkMode,
};

export const ThemeState = atom<themeState>({
  key: "themeState",
  default: defaultThemeState,
});
