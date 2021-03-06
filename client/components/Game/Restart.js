import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

import { getGameState } from "../../selectors";
import { resetMoves } from "../../slices/game";
import Button from "../Shared/Button";

const Reset = () => {
  const { started } = useSelector(getGameState);
  const { gameId } = useParams();
  const dispatch = useDispatch();

  return (
    <Button
      type="button"
      color="danger"
      disabled={!started}
      onClick={!started ? undefined : () => dispatch(resetMoves({ gameId }))}
    >
      Restart
    </Button>
  );
};

export default Reset;
