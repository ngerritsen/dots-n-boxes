import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

import { getBoardSize, getGameState } from "../../selectors";
import { setBoardSize } from "../../slices/game";
import gameConstants from "../../../shared/constants/game";
import Select from "../Shared/Select";

const Resize = () => {
  const { started } = useSelector(getGameState);
  const boardSize = useSelector(getBoardSize);
  const { gameId } = useParams();
  const dispatch = useDispatch();

  return (
    <Select
      value={boardSize}
      onChange={(event) =>
        dispatch(setBoardSize({ size: Number(event.target.value), gameId }))
      }
      disabled={started}
    >
      {gameConstants.boardSizes.map((size) => (
        <option key={size} value={size} disabled={started}>
          {size} x {size}
        </option>
      ))}
    </Select>
  );
};

export default Resize;
