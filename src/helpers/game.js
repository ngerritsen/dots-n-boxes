import { default as createBoard } from '../factories/board'
import { calculateScore } from '../helpers/score'

const initialScore = { scorePlayer0: 0, scorePlayer1: 0 }

export function calculateGameState (state, move = 0, previousPlayer = -1, previousScore = initialScore) {
  const { width, height, moves } = state
  const movesToCalculate = moves.slice(0, move)
  const board = createBoard(width, height, movesToCalculate)
  const score = calculateScore(board)
  const { scorePlayer0, scorePlayer1 } = score
  const activePlayer = determineNextPlayer(previousPlayer, previousScore, score)

  const gameState = { activePlayer, board, width, scorePlayer0, scorePlayer1 }

  if (moves.length === move) {
    return gameState
  }

  return calculateGameState(state, move + 1, activePlayer, score)
}

function determineNextPlayer (previousPlayer, previousScore, currentScore) {
  const previousPlayerPreviousScore = previousScore['scorePlayer' + previousPlayer]
  const previousPlayerCurrentScore = currentScore['scorePlayer' + previousPlayer]
  const previousPlayerScored = previousPlayerCurrentScore > previousPlayerPreviousScore

  if (previousPlayerScored) {
    return previousPlayer
  }

  return previousPlayer === 0 ? 1 : 0
}
