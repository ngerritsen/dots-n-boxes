import React from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { game } from "../selectors";
import { board } from "../atoms";

import sizes from "../constants/sizes.js";

const Resize = () => {
  const { isClear } = useRecoilValue(game);
  const setBoardSize = useSetRecoilState(board);

  return (
    <div>
      {sizes.map(({ width, height }, index) => (
        <button
          key={index}
          type="button"
          className={
            "button alt-default alt-grouped" + (!isClear ? " is-disabled" : "")
          }
          onClick={() => isClear && setBoardSize({ width, height })}
        >
          {width} x {height}
        </button>
      ))}
    </div>
  );
};

export default Resize;
