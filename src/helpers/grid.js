export function generateGrid (x, y) {
  let i
  let grid = []
  let cells = x * y

  for (i = 0; i < cells; i++) {
    if (isOuterLeft(i, x) || isOuterTop(i, y)) {
      grid.push(true)
    } else {
      grid.push(false)
    }
  }

  return grid
}

function isOuterLeft(index, x) {
  return index % x === 0
}

function isOuterTop(index, x) {
  return index < x
}
