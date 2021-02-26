import React from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import { game } from "../selectors";
import { moves } from "../atoms";
import Button from "./Shared/Button";

const Reset = () => {
  const { isClear } = useRecoilState(game);
  const resetMoves = useResetRecoilState(moves);

  return (
    <Button
      type="button"
      color="danger"
      disabled={isClear}
      onClick={isClear ? undefined : resetMoves}
    >
      Reset
    </Button>
  );
};

export default Reset;
