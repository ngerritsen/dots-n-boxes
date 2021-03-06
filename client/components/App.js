import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Notification from "./Notification";
import Game from "./Game";
import GlobalStyle from "./GlobalStyle";
import { dark, light } from "../theme";
import Start from "./Start";
import Header from "./Header";
import Container from "./Shared/Container";
import { onPrefersDarkModeChange, prefersDarkMode } from "../utils/theme";

const App = () => {
  const [useDarkMode, setUseDarkMode] = useState(prefersDarkMode());

  useEffect(() => {
    onPrefersDarkModeChange(setUseDarkMode);
  }, []);

  return (
    <ThemeProvider theme={useDarkMode ? dark : light}>
      <GlobalStyle />
      <Container>
        <Notification />
        <Header />
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
      </Container>
    </ThemeProvider>
  );
};

export default App;
