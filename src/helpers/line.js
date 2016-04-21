export function calculateLineSegment (location, side) {
  switch (side) {
    case 'top':
      return lineSegment(location, convertToTopRight(location))
    case 'right':
      return lineSegment(convertToTopRight(location), convertToBottomRight(location))
    case 'bottom':
      return lineSegment(convertToBottomLeft(location), convertToBottomRight(location))
    case 'left':
      return lineSegment(location, convertToBottomLeft(location))
  }
}

export function edgeIsTaken (lineStart, lineEnd, moves) {
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
  const [ x, y ] = location
  return [ x + 1, y ]
}

function convertToBottomRight (location) {
  const [ x, y ] = location
  return [ x + 1, y + 1 ]
}

function convertToBottomLeft (location) {
  const [ x, y ] = location
  return [ x, y + 1 ]
}
