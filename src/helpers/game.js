import { default as createBoard } from '../factories/board'
import { calculateScore, determineWhoWon } from '../helpers/score'
import { determineActivePlayer } from '../helpers/players'

export function calculateGameViewState ({ width, height, moves }) {
  const lastMoveIndex = moves.length - 1
  const isGameStart = lastMoveIndex < 0
  const isFirstMove = lastMoveIndex === 0

  const previousMoves = moves.slice(0, lastMoveIndex)
  const previousBoard = createBoard(width, height, previousMoves)
  const previousScore = calculateScore(previousBoard)
  const previousPlayer = isGameStart || isFirstMove ? 0 : moves[lastMoveIndex].player

  const board = createBoard(width, height, moves)
  const score = calculateScore(board)
  const activePlayer = isGameStart ? 0 : determineActivePlayer(previousPlayer, previousScore, score)
  const playerWon = determineWhoWon(width, height, score)
  const { scorePlayer0, scorePlayer1 } = score

  return { activePlayer, board, width, scorePlayer0, scorePlayer1, playerWon }
}
