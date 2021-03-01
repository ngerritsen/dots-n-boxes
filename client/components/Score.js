import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { getGameState } from "../selectors";
import { getColor, getPlayerColor, getSize } from "../utils/theme";

const Score = () => {
  const { activePlayer, playerWon, scores } = useSelector(getGameState);

  return (
    <>
      {scores.map((score, player) => (
        <PlayerScore
          key={player}
          player={player}
          isActive={activePlayer === player}
        >
          <span>
            {score}
            {playerWon === player && <strong> Won!</strong>}
          </span>
        </PlayerScore>
      ))}
    </>
  );
};

const PlayerScore = styled.span`
  background-color: ${(props) => props.isActive && getColor("subtleBg")};
  font-weight: ${(props) => (props.isActive ? "bold" : "medium")};
  display: inline-flex;
  align-items: center;
  border-radius: ${getSize(2)};
  margin-right: ${getSize(5)};
  padding: ${getSize(2)} ${getSize(3)};

  &:before {
    border-radius: ${getSize(1)};
    display: inline-block;
    content: "";
    height: ${getSize(4)};
    width: ${getSize(4)};
    margin-right: ${getSize(3)};
    background-color: ${(props) => getPlayerColor(props.player)};
  }

  &:last-child {
    margin-right: 0;
  }
`;

export default Score;
