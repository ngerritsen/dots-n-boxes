export function generateGrid (x, y) {
  let i
  let grid = []
  let cells = x * y

  for (i = 0; i < cells; i++) {
    const outer = isOuterLeft(i, x) || isOuterTop(i, y)
    const location = calculateLocation(i, x, y)
    const data = {
      location,
      outer
    }

    grid.push(data)
  }

  return grid
}

function calculateLocation (i, x, y) {
  const xCoord = i % x
  const yCoord = Math.floor(i / y)

  return [ xCoord, yCoord ]
}

function isOuterLeft (i, x) {
  return i % x === 0
}

function isOuterTop (i, x) {
  return i < x
}
