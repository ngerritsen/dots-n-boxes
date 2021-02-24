import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import Game from "./components/game";
import store from "./store";

//import "./styles/global.scss";

function renderGame(GameComponent) {
  ReactDOM.render(
    <Provider store={store}>
      <GameComponent />
    </Provider>,
    document.getElementById("root")
  );
}

renderGame(Game);
