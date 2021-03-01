import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Notification from "./components/Notification";
import Game from "./components/Game";
import GlobalStyle from "./components/GlobalStyle";
import theme from "./theme";
import store from "./store";
import Start from "./components/Start";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Notification />
        <BrowserRouter>
          <Switch>
            <Route path="/" exact>
              <Start />
            </Route>
            <Route path="/:gameId" exact>
              <Game />
            </Route>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
