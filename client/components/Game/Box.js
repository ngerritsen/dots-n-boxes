import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { math, size } from "polished";

import Edge from "./Edge";
import { getPlayerColor, getSize } from "../../utils/theme";
import sides from "../../../shared/constants/sides";

const { top, left } = sides;

const Box = ({ outer, edges, takenBy }) => (
  <StyledBox>
    {edges
      .filter(({ side }) => outer || (side !== top && side !== left))
      .map(({ lineStart, lineEnd, takenBy: edgeTakenBy, side }) => (
        <Edge
          key={side}
          lineStart={lineStart}
          lineEnd={lineEnd}
          takenBy={edgeTakenBy}
          side={side}
        />
      ))}
    {takenBy > -1 && <BoxFill takenBy={takenBy} />}
  </StyledBox>
);

Box.propTypes = {
  outer: PropTypes.bool,
  edges: PropTypes.arrayOf(
    PropTypes.shape({
      lineStart: PropTypes.arrayOf(PropTypes.number).isRequired,
      lineEnd: PropTypes.arrayOf(PropTypes.number).isRequired,
      side: PropTypes.string.isRequired,
    })
  ).isRequired,
  takenBy: PropTypes.number.isRequired,
};

const StyledBox = styled.div`
  display: inline-block;
  pointer-events: none;
  position: relative;
  width: ${getSize("box")};
  height: ${getSize("box")};
`;

const BoxFill = styled.div`
  border-radius: 4px;
  position: absolute;
  top: ${getSize(3)};
  left: ${getSize(3)};
  ${(props) => size(math(`${getSize("box")(props)} - ${getSize(6)(props)}`))};
  background-color: ${(props) => getPlayerColor(props.takenBy)(props)};
  opacity: 0.5;
`;

export default Box;
