import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { ThemeProvider } from "styled-components";
import { ThemeState } from "../atoms/themeAtoms";
import { darkTheme, lightTheme } from "./Themes";

type ProvidersProps = {
  children: React.ReactNode;
};

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  const [themeState, setThemeState] = useRecoilState(ThemeState);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setThemeState({
      darkMode: localStorage.getItem("theme") === "true" ? true : false,
    });
    setMounted(true);
  }, []);

  const theme = themeState.darkMode ? darkTheme : lightTheme;
  const body = <ThemeProvider theme={theme}>{children}</ThemeProvider>;

  if (!mounted) {
    return <div style={{ visibility: "hidden" }}>{body}</div>;
  }
  return body;
};
export default Providers;
