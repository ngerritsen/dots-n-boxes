import React from "react";
import PropTypes from "prop-types";
import Edge from "./Edge";
import { LEFT, TOP } from "../constants/sides";

const Box = ({ outer, edges, takenBy }) => {
  return (
    <div
      className={"box" + (takenBy > -1 ? ` is-taken-by-player-${takenBy}` : "")}
    >
      {edges
        .filter(({ side }) => outer || (side !== TOP && side !== LEFT))
        .map(({ lineStart, lineEnd, takenBy: edgeTakenBy, side }) => (
          <Edge
            key={side}
            lineStart={lineStart}
            lineEnd={lineEnd}
            takenBy={edgeTakenBy}
            side={side}
          />
        ))}
      <div className="box--fill"></div>
    </div>
  );
};

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

export default Box;
