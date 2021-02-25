import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";

import Game from "./components/game";

function renderGame(GameComponent) {
  ReactDOM.render(
    <React.StrictMode>
      <RecoilRoot>
        <GameComponent />
      </RecoilRoot>
    </React.StrictMode>,
    document.getElementById("root")
  );
}

renderGame(Game);
