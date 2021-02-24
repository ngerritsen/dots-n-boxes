import React from "react";
import PropTypes from "prop-types";

const Edge = ({
  activePlayer,
  lineEnd,
  lineStart,
  makeMove,
  playerWon,
  side,
  takenBy,
}) => (
  <div
    className={
      "edge" +
      (takenBy > -1 ? ` is-taken-by-player-${takenBy}` : "") +
      ` alt-${side}` +
      ` alt-active-player-${activePlayer}` +
      (playerWon > -1 ? " is-disabled" : "")
    }
    onClick={
      takenBy < 0 && playerWon < 0
        ? () => makeMove(activePlayer, lineStart, lineEnd)
        : undefined
    }
  ></div>
);

Edge.propTypes = {
  activePlayer: PropTypes.number.isRequired,
  lineEnd: PropTypes.array.isRequired,
  lineStart: PropTypes.array.isRequired,
  makeMove: PropTypes.func.isRequired,
  playerWon: PropTypes.number.isRequired,
  side: PropTypes.string.isRequired,
  takenBy: PropTypes.number.isRequired,
};

export default Edge;
