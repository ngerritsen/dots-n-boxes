import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { lighten } from "polished";
import { getPlayerColor, getSize, getColor } from "../utils/theme";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { game } from "../selectors";
import { BOTTOM, LEFT, RIGHT, TOP } from "../constants/sides";

const Edge = ({ lineEnd, lineStart, side, takenBy }) => {
  const { activePlayer, playerWon } = useRecoilValue(game);
  const makeMove = useSetRecoilState(game);

  return (
    <StyledEdge
      takenBy={takenBy}
      side={side}
      activePlayer={activePlayer}
      disabled={playerWon !== -1}
      onClick={
        takenBy < 0 && playerWon < 0
          ? () => makeMove({ player: activePlayer, lineStart, lineEnd })
          : undefined
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
  height: ${(props) => [TOP, BOTTOM].includes(props.side) && getSize("edge")};
  width: ${(props) => [LEFT, RIGHT].includes(props.side) && getSize("edge")};
  top: ${(props) =>
    ({
      [LEFT]: getSize("edge"),
      [RIGHT]: getSize("edge"),
      [TOP]: `calc(-${getSize("edge")(props)} / 2)`,
    }[props.side])};
  bottom: ${(props) =>
    ({
      [LEFT]: getSize("edge"),
      [RIGHT]: getSize("edge"),
      [BOTTOM]: `calc(-${getSize("edge")(props)} / 2)`,
    }[props.side])};
  left: ${(props) =>
    ({
      [TOP]: getSize("edge"),
      [BOTTOM]: getSize("edge"),
      [LEFT]: `calc(-${getSize("edge")(props)} / 2)`,
    }[props.side])};
  right: ${(props) =>
    ({
      [TOP]: getSize("edge"),
      [BOTTOM]: getSize("edge"),
      [RIGHT]: `calc(-${getSize("edge")(props)} / 2)`,
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
