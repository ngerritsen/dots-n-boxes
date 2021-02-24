import {
  isSameLineSegment,
  calculateLineSegment,
} from "../helpers/line-segments";

export default function edge(location, side, moves) {
  const { lineStart, lineEnd } = calculateLineSegment(location, side);
  const takenBy = edgeIsTakenBy(lineStart, lineEnd, moves);

  return {
    lineStart,
    lineEnd,
    takenBy,
    side,
  };
}

function edgeIsTakenBy(lineStart, lineEnd, moves) {
  return moves.reduce(
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
}
