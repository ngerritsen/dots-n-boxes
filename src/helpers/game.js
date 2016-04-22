import { default as createBoard } from '../factories/board'
import { calculateScore } from '../helpers/score'

export function calculateGameState ({ width, height, moves }) {
  const activePlayer = moves.length % 2
  const board = createBoard(width, height, moves)
  const { scorePlayer0, scorePlayer1 } = calculateScore(board)

  return {
    activePlayer,
    board,
    width,
    scorePlayer0,
    scorePlayer1
  }
}
