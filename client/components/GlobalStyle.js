import { createGlobalStyle } from "styled-components";
import { getColor } from "../utils/theme";

export default createGlobalStyle`
  html {
    font-size: 62.5%;
    height: 100%;
  }

  *,
  *:after,
  *:before {
    box-sizing: border-box;
  }

  body {
    font-family: 'Work Sans', Arial, sans-serif;
    font-size: 1.6rem;
    margin: 0;
    padding: 0;
    height: 100%;
    color: ${getColor("fg")};
  }

  #root {
    height: 100%;
  }
`;
