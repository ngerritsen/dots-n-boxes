import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

import { getGameState } from "../selectors";
import { resetMoves } from "../slices/game";
import Button from "./Shared/Button";

const Reset = () => {
  const { isClear } = useSelector(getGameState);
  const { gameId } = useParams();
  const dispatch = useDispatch();

  return (
    <Button
      type="button"
      color="danger"
      disabled={isClear}
      onClick={isClear ? undefined : () => dispatch(resetMoves({ gameId }))}
    >
      Reset
    </Button>
  );
};

export default Reset;
