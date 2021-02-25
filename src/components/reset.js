import React from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import { game } from "../selectors";
import { moves } from "../atoms";

const Reset = () => {
  const { isClear } = useRecoilState(game);
  const resetMoves = useResetRecoilState(moves);

  return (
    <button
      type="button"
      className={"button alt-negative" + (isClear ? " is-disabled" : "")}
      onClick={isClear ? undefined : resetMoves}
    >
      Reset
    </button>
  );
};

export default Reset;
