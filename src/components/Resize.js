import React from "react";
import { getGame } from "../selectors";
import { useDispatch, useSelector } from "react-redux";

import sizes from "../constants/sizes.js";
import Button from "./Shared/Button";
import ButtonGroup from "./Shared/ButtonGroup";
import { setBoard } from "../slices/board";

const Resize = () => {
  const { isClear } = useSelector(getGame);
  const dispatch = useDispatch();

  return (
    <ButtonGroup>
      {sizes.map(({ width, height }, index) => (
        <Button
          key={index}
          type="button"
          color="primary"
          disabled={!isClear}
          onClick={
            isClear ? () => dispatch(setBoard({ width, height })) : undefined
          }
        >
          {width} x {height}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default Resize;
