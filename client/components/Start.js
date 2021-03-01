import React from "react";
import { useDispatch } from "react-redux";
import Container from "./Shared/Container";
import Button from "./Shared/Button";
import Section from "./Shared/Section";
import { create } from "../slices/game";
import { useHistory } from "react-router";
import Username from "./Username";
import Title from "./Shared/Title";
import Center from "./Shared/Center";

const Start = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <Container>
      <Center>
        <Title>Dots {"'"}n Boxes</Title>
        <Section size={8}>
          <Button color="primary" onClick={() => dispatch(create({ history }))}>
            Create game
          </Button>
        </Section>
        <Section size={4}>
          <Button onClick={() => history.push("/local")} color="success">
            Play local
          </Button>
        </Section>
        <Section size={4}>
          <Username />
        </Section>
      </Center>
    </Container>
  );
};



export default Start;
