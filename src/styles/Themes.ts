declare module "styled-components" {
  export interface DefaultTheme {
    color_primary: string;
    color_secondary: string;
    color_tertiary: string;
    color_hover: string;
    color_tertiary_light: string;
    color_tertiary_dark: string;
    color_text: string;
    color_text_light: string;
    color_body: string;
  }
}

export const lightTheme = {
  color_primary: "#ff4500",
  color_secondary: "#0079d3",
  color_tertiary: "#ffffff",
  color_hover: "#edeff1",
  color_tertiary_light: "#f6f7f8",
  color_tertiary_dark: " #7c7c7c",
  color_text: "#2b2b2b",
  color_text_light: "#878a8c",
  color_body: "#dae0e6",
};
export const darkTheme = {
  color_primary: "#ff4500",
  color_secondary: "#d7dadc",
  color_tertiary: "#1a1a1b",
  color_hover: "#2d2d2e",
  color_tertiary_light: "#272729",
  color_tertiary_dark: "#7d7f80",
  color_text: "#d4d7d9",
  color_text_light: "#9a9b9f",
  color_body: "#030303",
};
