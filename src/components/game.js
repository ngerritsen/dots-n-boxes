import React from "react";

import Board from "./board";
import Score from "./score";
import Reset from "./reset";
import Resize from "./resize";

const Game = () => (
  <div className="container">
    <h1 className="title">Boxes</h1>
    <Score />
    <Board />
    <Resize />
    <Reset />
  </div>
);

export default Game;
