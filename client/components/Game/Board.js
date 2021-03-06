import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { math } from "polished";

import Box from "./Box";
import { getSize } from "../../utils/theme";
import { getBoardSize, getGameState } from "../../selectors";

const Board = () => {
  const { board } = useSelector(getGameState);
  const size = useSelector(getBoardSize);

  return (
    <BoardContainer>
      <StyledBoard width={size}>
        {board.map(({ edges, outer, takenBy }, i) => (
          <Box key={i} edges={edges} outer={outer} takenBy={takenBy} />
        ))}
      </StyledBoard>
    </BoardContainer>
  );
};

const BoardContainer = styled.div`
  max-width: 100%;
  overflow: auto;
  text-align: center;
`;

const StyledBoard = styled.div`
  display: inline-block;
  width: ${(props) =>
    math(
      `(${props.width} * ${getSize("box")(props)}) + ${getSize("edge")(props)}`
    )};
  padding: ${(props) => math(`(${getSize("edge")(props)} / 2)`)};
`;

export default Board;
