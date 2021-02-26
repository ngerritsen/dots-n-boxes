import React from "react";

import Board from "./Board";
import Score from "./Score";
import Reset from "./Reset";
import Resize from "./Resize";
import Section from "./Shared/Section";
import Container from "./Shared/Container";

const Game = () => (
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
  </Container>
);

export default Game;
