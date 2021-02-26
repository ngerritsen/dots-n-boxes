import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";

import Game from "./components/Game";
import GlobalStyle from "./components/GlobalStyle";
import theme from "./theme";

function renderGame(GameComponent) {
  ReactDOM.render(
    <React.StrictMode>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <GameComponent />
        </ThemeProvider>
      </RecoilRoot>
    </React.StrictMode>,
    document.getElementById("root")
  );
}

renderGame(Game);
