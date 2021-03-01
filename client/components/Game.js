import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import Board from "./Board";
import Score from "./Score";
import Reset from "./Reset";
import Resize from "./Resize";
import Section from "./Shared/Section";
import Button from "./Shared/Button";
import Container from "./Shared/Container";
import { join } from "../slices/game";

const Game = () => {
  const { gameId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (gameId === "local") {
      return;
    }

    dispatch(join({ gameId }));
  }, [gameId]);

  return (
    <Container>
      <Section>
        <Score />
      </Section>
      <Section size={10}>
        <Board />
      </Section>
      <Section size={10}>
        <Resize />
      </Section>
      <Section size={4}>
        <Reset />
      </Section>
      <Section size={10}>
        <Button onClick={() => history.push("/")} color="primary">
          Back to home
        </Button>
      </Section>
    </Container>
  );
};

export default Game;
