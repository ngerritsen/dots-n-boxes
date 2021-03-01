import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { getGameState } from "../selectors";
import { resetMoves } from "../slices/game";
import Button from "./Shared/Button";

const Reset = () => {
  const { isClear } = useSelector(getGameState);
  const dispatch = useDispatch();

  return (
    <Button
      type="button"
      color="danger"
      disabled={isClear}
      onClick={isClear ? undefined : () => dispatch(resetMoves())}
    >
      Reset
    </Button>
  );
};

export default Reset;
