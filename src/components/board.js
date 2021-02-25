import React from "react";
import Box from "./Box";
import { BOX_SIZE } from "../constants";
import { useRecoilValue } from "recoil";
import { game } from "../selectors";
import { board as boardAtom } from "../atoms";

const Board = () => {
  const { board } = useRecoilValue(game);
  const { width } = useRecoilValue(boardAtom);

  return (
    <div
      className="board"
      style={{
        width: String(width * BOX_SIZE) + "px",
      }}
    >
      {board.map(({ edges, outer, takenBy }, i) => (
        <Box key={i} edges={edges} outer={outer} takenBy={takenBy} />
      ))}
    </div>
  );
};

export default Board;
