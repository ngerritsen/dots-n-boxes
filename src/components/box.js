import React from "react";
import PropTypes from "prop-types";

import Edge from "./edge";

const Box = ({ activePlayer, makeMove, edges, outer, playerWon, takenBy }) => (
  <div
    className={"box" + (takenBy > -1 ? ` is-taken-by-player-${takenBy}` : "")}
  >
    {edges
      .filter(({ side }) => outer || (side !== "top" && side !== "left"))
      .map(({ lineStart, lineEnd, takenBy: edgeTakenBy, side }) => (
        <Edge
          key={side}
          activePlayer={activePlayer}
          lineStart={lineStart}
          lineEnd={lineEnd}
          makeMove={makeMove}
          takenBy={edgeTakenBy}
          playerWon={playerWon}
          side={side}
        />
      ))}
    <div className="box--fill"></div>
  </div>
);

Box.propTypes = {
  activePlayer: PropTypes.number.isRequired,
  edges: PropTypes.array.isRequired,
  makeMove: PropTypes.func.isRequired,
  outer: PropTypes.bool,
  playerWon: PropTypes.number.isRequired,
  takenBy: PropTypes.number.isRequired,
};

export default Box;
