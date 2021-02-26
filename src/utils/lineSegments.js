import { TOP, BOTTOM, LEFT, RIGHT } from "../constants/sides";

export function isSameLineSegment(segmentA, segmentB) {
  return (
    segmentA.lineStart[0] === segmentB.lineStart[0] &&
    segmentA.lineStart[1] === segmentB.lineStart[1] &&
    segmentA.lineEnd[0] === segmentB.lineEnd[0] &&
    segmentA.lineEnd[1] === segmentB.lineEnd[1]
  );
}

export function calculateLineSegment(location, side) {
  switch (side) {
    case TOP:
      return lineSegment(location, convertToTopRight(location));
    case RIGHT:
      return lineSegment(
        convertToTopRight(location),
        convertToBottomRight(location)
      );
    case BOTTOM:
      return lineSegment(
        convertToBottomLeft(location),
        convertToBottomRight(location)
      );
    case LEFT:
      return lineSegment(location, convertToBottomLeft(location));
  }
}

function lineSegment(lineStart, lineEnd) {
  return {
    lineStart,
    lineEnd,
  };
}

function convertToTopRight(location) {
  const [x, y] = location;
  return [x + 1, y];
}

function convertToBottomRight(location) {
  const [x, y] = location;
  return [x + 1, y + 1];
}

function convertToBottomLeft(location) {
  const [x, y] = location;
  return [x, y + 1];
}
