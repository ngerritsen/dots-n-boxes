import { createGlobalStyle } from "styled-components";
import { getColor } from "../utils/theme";

export default createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  *,
  *:after,
  *:before {
    box-sizing: border-box;
  }

  body {
    font-family: Arial, sans-serif;
    font-size: 1.6rem;
    margin: 0;
    padding: 0;
    color: ${getColor("fg")};
  }
`;
