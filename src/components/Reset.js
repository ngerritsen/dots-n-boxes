import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { getGame } from "../selectors";
import { resetMoves } from "../slices/moves";
import Button from "./Shared/Button";

const Reset = () => {
  const { isClear } = useSelector(getGame);
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
