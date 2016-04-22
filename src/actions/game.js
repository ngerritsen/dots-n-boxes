import { MAKE_MOVE, RESET } from '../constants/action-types'

export function makeMove (player, lineStart, lineEnd) {
  return {
    type: MAKE_MOVE,
    move: {
      player,
      lineStart,
      lineEnd
    }
  }
}

export function reset () {
  return {
    type: RESET
  }
}
