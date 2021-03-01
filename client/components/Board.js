import React from "react";
import { useSelector } from "react-redux";

import Box from "./Box";
import styled from "styled-components";
import { math } from "polished";
import { getSize } from "../utils/theme";
import { getBoardSize, getGameState } from "../selectors";

const Board = () => {
  const { board } = useSelector(getGameState);
  const size = useSelector(getBoardSize);

  return (
    <StyledBoard width={size}>
      {board.map(({ edges, outer, takenBy }, i) => (
        <Box key={i} edges={edges} outer={outer} takenBy={takenBy} />
      ))}
    </StyledBoard>
  );
};

const StyledBoard = styled.div`
  display: inline-block;
  width: ${(props) => math(`${props.width} * ${getSize("box")(props)}`)};
`;

export default Board;
