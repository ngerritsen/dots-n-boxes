import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";

import Board from "./Board";
import Score from "./Score";
import Reset from "./Reset";
import Resize from "./Resize";
import Section from "./Shared/Section";
import Button from "./Shared/Button";
import { join } from "../slices/game";
import { getToken } from "../selectors";
import { getSize } from "../utils/theme";
import ButtonIcon from "./Shared/ButtonIcon";
import Center from "./Shared/Center";

const Game = () => {
  const { gameId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const token = useSelector(getToken);

  useEffect(() => {
    if (token) {
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
        <Center>
          <div>
            <Board />
            <Section size={12}>
              <Resize />
            </Section>
            <Section size={4}>
              <Reset />
            </Section>
          </div>
        </Center>
      </Main>
    </Grid>
  );
};

const Main = styled.div`
  flex-grow: 1;
  text-align: center;
`;

const Grid = styled.div`
  display: flex;
`;

const Sidebar = styled.div`
  margin-right: ${getSize(12)};
`;

export default Game;
