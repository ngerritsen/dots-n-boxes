import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { lighten } from "polished";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

import { getPlayerColor, getSize, getColor } from "../utils/theme";
import { getGameState, getPlayerId } from "../selectors";
import sides from "../../shared/constants/sides";
import { makeMove } from "../slices/game";

const { top, bottom, left, right } = sides;

const Edge = ({ lineEnd, lineStart, side, takenBy }) => {
  const { gameId } = useParams();
  const { activePlayer, playerWon } = useSelector(getGameState);
  const playerId = useSelector(getPlayerId);
  const dispatch = useDispatch();
  const myTurn = gameId === "local" || playerId === activePlayer;
  const disabled = !myTurn || playerWon !== -1 || takenBy > -1;

  return (
    <StyledEdge
      takenBy={takenBy}
      side={side}
      activePlayer={activePlayer}
      disabled={disabled}
      onClick={() =>
        !disabled &&
        dispatch(makeMove({ player: activePlayer, lineStart, lineEnd }))
      }
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
      props.takenBy === -1 &&
      !props.disabled &&
      lighten(0.2, getPlayerColor(props.activePlayer)(props))};
`;

export default Edge;
