import React from "react";
import Box from "./Box";

import { useRecoilValue } from "recoil";
import { game } from "../selectors";
import { board as boardAtom } from "../atoms";
import styled from "styled-components";
import { math } from "polished";
import { getSize } from "../utils/theme";

const Board = () => {
  const { board } = useRecoilValue(game);
  const { width } = useRecoilValue(boardAtom);

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
