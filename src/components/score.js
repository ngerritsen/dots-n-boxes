import React from "react";
import { useRecoilValue } from "recoil";
import { game } from "../selectors";

const Score = () => {
  const {
    activePlayer,
    playerWon,
    scorePlayer0,
    scorePlayer1,
  } = useRecoilValue(game);

  return (
    <div className="score">
      <span
        className={
          "score--item alt-player-0" + (activePlayer === 0 ? " is-active" : "")
        }
      >
        {scorePlayer0}
        {playerWon === 0 && <strong> Won!</strong>}
      </span>
      <span
        className={
          "score--item alt-player-1" + (activePlayer === 1 ? " is-active" : "")
        }
      >
        {scorePlayer1}
        {playerWon === 1 && <strong> Won!</strong>}
      </span>
    </div>
  );
};

export default Score;
