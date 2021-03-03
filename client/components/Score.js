import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward } from "@fortawesome/free-solid-svg-icons/faAward";

import { getGameState, getPlayers } from "../selectors";
import { getColor, getPlayerColor, getRadius, getSize } from "../utils/theme";

const Score = () => {
  const { activePlayer, playerWon, scores } = useSelector(getGameState);
  const players = useSelector(getPlayers);

  return (
    <>
      {scores.map((score, player) => (
        <PlayerScore
          key={player}
          player={player}
          isActive={activePlayer === player}
        >
          <Player>
            {(players && players[player]) || "Unknown"}{" "}
            {playerWon === player && <Winner icon={faAward} />}
          </Player>
          <strong>{score}</strong>
        </PlayerScore>
      ))}
    </>
  );
};

const Winner = styled(FontAwesomeIcon)`
  margin-left: ${getSize(1)};
  color: ${getColor("gold")};
`;

const Player = styled.span`
  overflow: ellipsis;
  flex-grow: 1;
  whitespace: no-wrap;
  margin-right: ${getSize(2)};
`;

const PlayerScore = styled.span`
  background-color: ${(props) => props.isActive && getColor("subtleBg")};
  display: flex;
  align-items: center;
  border-radius: ${getRadius("rounded")};
  margin-right: ${getSize(5)};
  margin-bottom: ${getSize(2)};
  width: 100%;
  padding: ${getSize(2)} ${getSize(4)} ${getSize(2)} ${getSize(3)};

  &:before {
    border-radius: ${getRadius("rounded")};
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
