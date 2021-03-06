import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward } from "@fortawesome/free-solid-svg-icons/faAward";

import { defaultPlayerNames } from "../../constants/players";
import { getGameState, getPlayer, getPlayers } from "../../selectors";
import {
  getColor,
  getPlayerColor,
  getRadius,
  getSize,
} from "../../utils/theme";
import { play } from "../../utils/sound";
import playerJoined from "../../sound/playerJoined.mp3";

const Score = () => {
  const { activePlayer, winner, scores } = useSelector(getGameState);
  const players = useSelector(getPlayers);
  const prevPlayers = useRef([]);
  const currentPlayer = useSelector(getPlayer);

  useEffect(() => {
    if (
      players.length > 1 &&
      players.length - prevPlayers.current.length === 1
    ) {
      play(playerJoined);
    }

    prevPlayers.current = players;
  }, [players]);

  return (
    <>
      {players.map((name, player) => (
        <PlayerScore
          key={player}
          player={player}
          isActive={activePlayer === player}
        >
          <Player current={player === currentPlayer}>
            {name || defaultPlayerNames[player]}{" "}
            {winner === player && <Winner icon={faAward} />}
          </Player>
          <strong>{scores[player]}</strong>
        </PlayerScore>
      ))}
    </>
  );
};

const Winner = styled(FontAwesomeIcon)`
  margin-left: ${getSize(2)};
  color: ${getColor("gold")};
`;

const Player = styled.span`
  overflow: ellipsis;
  flex-grow: 1;
  whitespace: no-wrap;
  margin-right: ${getSize(2)};
  font-weight: ${(props) => (props.current ? "bold" : "normal")};
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
