import { SIDES } from '../constants/sides'
import { isSameLineSegment } from '../helpers/line-segments'
import edge from './edge'

export default function box (index, moves, boardWidth, boardHeight) {
  const location = calculateLocation(index, boardWidth, boardHeight)
  const outer = isOuter(location)
  const edges = SIDES.map(side => edge(location, side, moves))
  const isTaken = isBoxTaken(edges)
  const takenBy = isTaken ? boxIsTakenBy(edges, moves) : -1

  return {
    location,
    outer,
    edges,
    takenBy
  }
}

function isBoxTaken (edges) {
  return edges.reduce((isTaken, { takenBy }) => {
    return isTaken ? takenBy > -1 : isTaken
  }, true)
}

function boxIsTakenBy (edges, moves) {
  return moves.reduce((takenBy, move) => {
    const matchingEdge = edges.find(e => isSameLineSegment(e, move))

    return matchingEdge ? matchingEdge.takenBy : takenBy
  }, -1)
}

function calculateLocation (index, width, height) {
  const xCoord = index % width
  const yCoord = Math.floor(index / height)

  return [xCoord, yCoord]
}

function isOuter (location) {
  return location[0] === 0 || location[1] === 0
}
