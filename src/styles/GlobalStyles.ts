import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
html{
  font-size: 62.5%;
}
html,
body {
  max-width: 100vw;
  overflow-x: hidden;
}

body {
  font-size: 1.5rem;
  font-family: 'Roboto Mono', monospace;
  font-weight: 400;
}

a {
  color: inherit;
  text-decoration: none;
}

`;

export default GlobalStyles;
