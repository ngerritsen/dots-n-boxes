import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import Game from "./components/Game";
import GlobalStyle from "./components/GlobalStyle";
import theme from "./theme";
import store from "./store";

function renderGame(GameComponent) {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <GameComponent />
        </ThemeProvider>
      </Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );
}

renderGame(Game);
