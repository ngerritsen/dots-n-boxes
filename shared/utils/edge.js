const { isSameLineSegment, calculateLineSegment } = require("./lineSegments");

const createEdge = (location, side, moves) => {
  const { lineStart, lineEnd } = calculateLineSegment(location, side);
  const takenBy = edgeIsTakenBy(lineStart, lineEnd, moves);

  return {
    lineStart,
    lineEnd,
    takenBy,
    side,
  };
};

const edgeIsTakenBy = (lineStart, lineEnd, moves) =>
  moves.reduce(
    (isTaken, { lineStart: moveLineStart, lineEnd: moveLineEnd, player }) => {
      if (
        isSameLineSegment(
          { lineStart, lineEnd },
          { lineStart: moveLineStart, lineEnd: moveLineEnd }
        )
      ) {
        return player;
      }

      return isTaken;
    },
    -1
  );

module.exports = createEdge;
