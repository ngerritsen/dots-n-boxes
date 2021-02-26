import React from "react";
import { useSelector } from "react-redux";

import Box from "./Box";
import styled from "styled-components";
import { math } from "polished";
import { getSize } from "../utils/theme";
import { getBoard, getGame } from "../selectors";

const Board = () => {
  const { board } = useSelector(getGame);
  const { width } = useSelector(getBoard);

  return (
    <StyledBoard width={width}>
      {board.map(({ edges, outer, takenBy }, i) => (
        <Box key={i} edges={edges} outer={outer} takenBy={takenBy} />
      ))}
    </StyledBoard>
  );
};

const StyledBoard = styled.div`
  width: ${(props) => math(`${props.width} * ${getSize("box")(props)}`)};
`;

export default Board;
