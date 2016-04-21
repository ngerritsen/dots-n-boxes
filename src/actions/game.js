import { MAKE_MOVE } from '../constants/action-types'

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
