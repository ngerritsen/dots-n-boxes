import { SIDES } from '../constants/sides'
import edge from './edge'

export default function box (index, moves, boardWidth, boardHeight) {
  const location = calculateLocation(index, boardWidth, boardHeight)
  const outer = isOuter(location)
  const edges = SIDES.map(side => edge(location, side, moves))
  const taken = isBoxTaken(edges)

  return {
    location,
    outer,
    edges,
    taken
  }
}

export function isBoxTaken (edges) {
  return edges.reduce((isTaken, { taken }) => {
    return taken ? isTaken : false
  }, true)
}

function calculateLocation (index, width, height) {
  const xCoord = index % width
  const yCoord = Math.floor(index / height)

  return [xCoord, yCoord]
}

function isOuter (location) {
  return location[0] === 0 || location[1] === 0
}
