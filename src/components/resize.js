import React from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { game } from "../selectors";
import { board } from "../atoms";

import sizes from "../constants/sizes.js";
import Button from "./Shared/Button";
import ButtonGroup from "./Shared/ButtonGroup";

const Resize = () => {
  const { isClear } = useRecoilValue(game);
  const setBoardSize = useSetRecoilState(board);

  return (
    <ButtonGroup>
      {sizes.map(({ width, height }, index) => (
        <Button
          key={index}
          type="button"
          color="primary"
          disabled={!isClear}
          onClick={isClear ? () => setBoardSize({ width, height }) : undefined}
        >
          {width} x {height}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default Resize;
