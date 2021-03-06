import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";

import Board from "./Game/Board";
import Score from "./Game/Score";
import Resize from "./Game/Resize";
import Section from "./Shared/Section";
import Button from "./Shared/Button";
import { join, initLocal } from "../slices/game";
import { getGameState, getToken } from "../selectors";
import { getBreakpoint, getSize } from "../utils/theme";
import ButtonIcon from "./Shared/ButtonIcon";
import Center from "./Shared/Center";
import Result from "./Game/Result";
import Restart from "./Game/Restart";

const Game = () => {
  const { gameId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const token = useSelector(getToken);
  const { started } = useSelector(getGameState);

  useEffect(() => {
    if (gameId === "local") {
      dispatch(initLocal());
    } else if (token) {
      dispatch(join({ gameId }));
    }
  }, [gameId, token]);

  return (
    <Grid>
      <Sidebar>
        <Button fullWidth onClick={() => history.push("/")} color="primary">
          <ButtonIcon icon={faChevronLeft} /> Back to home
        </Button>
        <Section size={6}>
          <Score />
        </Section>
      </Sidebar>
      <Main>
        <Board />
        <Section size={8}>
          <Center>{started ? <Restart /> : <Resize />}</Center>
        </Section>
      </Main>
      <Result />
    </Grid>
  );
};

const Main = styled.div`
  margin-top: ${getSize(8)};

  @media (min-width: ${getBreakpoint("tablet")}) {
    margin-top: 0;
    flex-grow: 1;
    text-align: center;
  }
`;

const Grid = styled.div`
  @media (min-width: ${getBreakpoint("tablet")}) {
    display: flex;
  }
`;

const Sidebar = styled.div`
  @media (min-width: ${getBreakpoint("tablet")}) {
    margin-right: ${getSize(12)};
  }
`;

export default Game;
