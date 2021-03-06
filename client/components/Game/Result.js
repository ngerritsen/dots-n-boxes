import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router";

import { resetMoves } from "../../slices/game";
import { defaultPlayerNames } from "../../constants/players";
import { getGameState, getPlayer, getPlayers } from "../../selectors";
import { getColor, getPlayerColor } from "../../utils/theme";
import Button from "../Shared/Button";
import Center from "../Shared/Center";
import Modal from "../Shared/Modal";
import Section from "../Shared/Section";
import { play } from "../../utils/sound";
import gameWon from "../../sound/gameWon.mp3";
import gameLost from "../../sound/gameLost.mp3";

const Result = () => {
  const { gameId } = useParams();
  const { finished, winner } = useSelector(getGameState);
  const players = useSelector(getPlayers);
  const dispatch = useDispatch();
  const player = useSelector(getPlayer);

  useEffect(() => {
    if (finished) {
      const positive = gameId === "local" ? winner > -1 : winner === player;
      play(positive ? gameWon : gameLost);
    }
  }, [finished]);

  return (
    <Modal isOpen={finished}>
      <ResultMessage>
        {winner === -1 && "Tie!"}
        {winner > -1 &&
          (players[winner] || defaultPlayerNames[winner] + " won!")}
      </ResultMessage>

      <Section size={12}>
        <Center>
          <Icon
            winner={winner}
            size="4x"
            icon={winner > -1 ? faTrophy : faHandshake}
          />
        </Center>
      </Section>

      <Section size={12}>
        <Center>
          <Button
            color="primary"
            onClick={() => dispatch(resetMoves({ gameId }))}
          >
            Restart
          </Button>
        </Center>
      </Section>
    </Modal>
  );
};

const Icon = styled(FontAwesomeIcon)`
  color: ${(props) =>
    props.winner > -1 ? getPlayerColor(props.winner) : getColor("neutral")};
`;

const ResultMessage = styled.p`
  font-size: 3.2rem;
  font-weight: bold;
  padding: 0;
  margin: 0;
  text-align: center;
`;

export default Result;
