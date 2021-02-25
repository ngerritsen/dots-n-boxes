import React from "react";
import PropTypes from "prop-types";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { game } from "../selectors";

const Edge = ({ lineEnd, lineStart, side, takenBy }) => {
  const { activePlayer, playerWon } = useRecoilValue(game);
  const makeMove = useSetRecoilState(game);

  return (
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
          ? () => makeMove({ player: activePlayer, lineStart, lineEnd })
          : undefined
      }
    ></div>
  );
};

Edge.propTypes = {
  lineStart: PropTypes.arrayOf(PropTypes.number).isRequired,
  lineEnd: PropTypes.arrayOf(PropTypes.number).isRequired,
  side: PropTypes.string.isRequired,
  takenBy: PropTypes.number.isRequired,
};

export default Edge;
