import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

import { getPlayerColor, getSize, getColor } from "../../utils/theme";
import { getGameState, getPlayer } from "../../selectors";
import sides from "../../../shared/constants/sides";
import { makeMove } from "../../slices/game";
import { play } from "../../utils/sound";
import takeEdge from "../../sound/takeEdge.mp3";

const { top, bottom, left, right } = sides;

const Edge = ({ lineEnd, lineStart, side, takenBy }) => {
  const { gameId } = useParams();
  const { activePlayer, finished } = useSelector(getGameState);
  const player = useSelector(getPlayer);
  const dispatch = useDispatch();
  const myTurn = gameId === "local" || player === activePlayer;
  const disabled = !myTurn || finished || takenBy > -1;

  return (
    <StyledEdge
      takenBy={takenBy}
      side={side}
      activePlayer={activePlayer}
      disabled={disabled}
      onClick={() => {
        if (disabled) {
          return;
        }

        play(takeEdge);
        dispatch(
          makeMove({
            gameId,
            move: { player: activePlayer, lineStart, lineEnd },
          })
        );
      }}
    />
  );
};

Edge.propTypes = {
  lineStart: PropTypes.arrayOf(PropTypes.number).isRequired,
  lineEnd: PropTypes.arrayOf(PropTypes.number).isRequired,
  side: PropTypes.string.isRequired,
  takenBy: PropTypes.number.isRequired,
};

const StyledEdge = styled.div`
  background-color: ${(props) =>
    getPlayerColor(props.takenBy)(props) || getColor("subtleBg")(props)};
  height: ${(props) => [top, bottom].includes(props.side) && getSize("edge")};
  width: ${(props) => [left, right].includes(props.side) && getSize("edge")};
  top: ${(props) =>
    ({
      [left]: getSize("edge"),
      [right]: getSize("edge"),
      [top]: `calc(-${getSize("edge")(props)} / 2)`,
    }[props.side])};
  bottom: ${(props) =>
    ({
      [left]: getSize("edge"),
      [right]: getSize("edge"),
      [bottom]: `calc(-${getSize("edge")(props)} / 2)`,
    }[props.side])};
  left: ${(props) =>
    ({
      [top]: getSize("edge"),
      [bottom]: getSize("edge"),
      [left]: `calc(-${getSize("edge")(props)} / 2)`,
    }[props.side])};
  right: ${(props) =>
    ({
      [top]: getSize("edge"),
      [bottom]: getSize("edge"),
      [right]: `calc(-${getSize("edge")(props)} / 2)`,
    }[props.side])};
  border-radius: ${getSize("edge")};
  pointer-events: all;
  position: absolute;
  cursor: ${(props) =>
    props.disabled || props.takenBy !== -1 ? "default" : "pointer"};

  &:hover {
    background-color: ${(props) =>
      !props.disabled && getPlayerColor(props.activePlayer)(props)};
    opacity: ${(props) => !props.disabled && 0.5};
  }
`;

export default Edge;
