import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

import { getGameState } from "../selectors";
import Button from "./Shared/Button";
import ButtonGroup from "./Shared/ButtonGroup";
import { setBoardSize } from "../slices/game";
import sizes from "../../shared/boardSizes";

const Resize = () => {
  const { isClear } = useSelector(getGameState);
  const { gameId } = useParams();
  const dispatch = useDispatch();

  return (
    <ButtonGroup>
      {sizes.map((size, index) => (
        <Button
          small
          key={index}
          type="button"
          color="neutral"
          disabled={!isClear}
          onClick={
            isClear ? () => dispatch(setBoardSize({ size, gameId })) : undefined
          }
        >
          {size} x {size}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default Resize;
