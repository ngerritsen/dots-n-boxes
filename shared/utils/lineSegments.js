const { top, bottom, left, right } = require("../constants/sides");

const isSameLineSegment = (segmentA, segmentB) =>
  segmentA.lineStart[0] === segmentB.lineStart[0] &&
  segmentA.lineStart[1] === segmentB.lineStart[1] &&
  segmentA.lineEnd[0] === segmentB.lineEnd[0] &&
  segmentA.lineEnd[1] === segmentB.lineEnd[1];

const calculateLineSegment = (location, side) => {
  switch (side) {
    case top:
      return createLineSegment(location, toTopRight(location));
    case right:
      return createLineSegment(toTopRight(location), toBottomRight(location));
    case bottom:
      return createLineSegment(toBottomLeft(location), toBottomRight(location));
    case left:
      return createLineSegment(location, toBottomLeft(location));
  }
};

const createLineSegment = (lineStart, lineEnd) => ({
  lineStart,
  lineEnd,
});

const toTopRight = ([x, y]) => [x + 1, y];
const toBottomRight = ([x, y]) => [x + 1, y + 1];
const toBottomLeft = ([x, y]) => [x, y + 1];

module.exports = {
  isSameLineSegment,
  calculateLineSegment,
};
