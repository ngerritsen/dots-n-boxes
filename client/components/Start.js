import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Container from "./Shared/Container";
import Button from "./Shared/Button";
import Section from "./Shared/Section";
import { create } from "../slices/game";
import { createGameRoute } from "../utils/routes";
import { useHistory } from "react-router";

const Start = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <Container>
      <Title>Dots {"'"}n Boxes</Title>
      <Section size={12}>
        <Section size={4}>
          <Button color="primary" onClick={() => dispatch(create())}>
            Create game
          </Button>
        </Section>
        <Section size={4}>
          <Button
            onClick={() => history.push(createGameRoute("local"))}
            color="success"
          >
            Play local
          </Button>
        </Section>
      </Section>
    </Container>
  );
};

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin: 0;
`;

export default Start;
