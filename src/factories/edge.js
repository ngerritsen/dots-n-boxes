import { TOP, BOTTOM, LEFT, RIGHT } from '../constants/sides'

export default function edge(location, side, moves) {
  const { lineStart, lineEnd } = calculateLineSegment(location, side)
  const taken = edgeIsTaken(lineStart, lineEnd, moves)

  return {
    lineStart,
    lineEnd,
    taken,
    side
  }
}

function calculateLineSegment (location, side) {
  switch (side) {
    case TOP:
      return lineSegment(location, convertToTopRight(location))
    case RIGHT:
      return lineSegment(convertToTopRight(location), convertToBottomRight(location))
    case BOTTOM:
      return lineSegment(convertToBottomLeft(location), convertToBottomRight(location))
    case LEFT:
      return lineSegment(location, convertToBottomLeft(location))
  }
}

function edgeIsTaken (lineStart, lineEnd, moves) {
  return moves.reduce((isTaken, { lineStart: moveLineStart, lineEnd: moveLineEnd }) => {
    if (
      moveLineStart[0] === lineStart[0] &&
      moveLineStart[1] === lineStart[1] &&
      moveLineEnd[0] === lineEnd[0] &&
      moveLineEnd[1] === lineEnd[1]
    ) {
      return true
    }

    return isTaken
  }, false)
}

function lineSegment (lineStart, lineEnd) {
  return {
    lineStart,
    lineEnd
  }
}

function convertToTopRight (location) {
  const [x, y] = location
  return [x + 1, y]
}

function convertToBottomRight (location) {
  const [x, y] = location
  return [x + 1, y + 1]
}

function convertToBottomLeft (location) {
  const [x, y] = location
  return [x, y + 1]
}
