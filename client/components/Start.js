import React from "react";
import { useDispatch } from "react-redux";
import Button from "./Shared/Button";
import Section from "./Shared/Section";
import { create } from "../slices/game";
import { useHistory } from "react-router";
import Center from "./Shared/Center";
import styled from "styled-components";

const Start = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <Center>
      <Buttons>
        <Section size={4}>
          <Button
            fullWidth
            color="primary"
            onClick={() => dispatch(create({ history }))}
          >
            Create game
          </Button>
        </Section>
        <Section size={4}>
          <Button
            fullWidth
            onClick={() => history.push("/local")}
            color="success"
          >
            Play local
          </Button>
        </Section>
      </Buttons>
    </Center>
  );
};

const Buttons = styled.div`
  max-width: 32rem;
  margin-top: 10vh;
`;

export default Start;
