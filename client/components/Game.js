import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import Board from "./Board";
import Score from "./Score";
import Reset from "./Reset";
import Resize from "./Resize";
import Section from "./Shared/Section";
import Button from "./Shared/Button";
import Container from "./Shared/Container";
import { join } from "../slices/game";
import { getToken } from "../selectors";
import { getSize } from "../utils/theme";
import Username from "./Username";
import Center from "./Shared/Center";
import Title from "./Shared/Title";

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
    <Container>
      <div>
        <Center>
          <Title>Dots {"'"}n Boxes</Title>
        </Center>
        <Grid>
          <Sidebar>
            <Button fullWidth onClick={() => history.push("/")} color="primary">
              Back to home
            </Button>
            <Section size={2}>
              <Username fullWidth />
            </Section>
            <Section size={6}>
              <Score />
            </Section> 
          </Sidebar>
          <Main>
            <Board />
            <Section size={12}>
              <Resize />
            </Section>
            <Section size={4}>
              <Reset />
            </Section>
          </Main>
        </Grid>
      </div>
    </Container>
  );
};

const Main = styled.div`
  text-align: center;
`;

const Grid = styled.div`
  display: flex;
`;

const Sidebar = styled.div`
  margin-right: ${getSize(12)};
`;

export default Game;
