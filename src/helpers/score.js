export function calculateScore (board) {
  return board.reduce(({ scorePlayer0, scorePlayer1 }, { takenBy }) => ({
    scorePlayer0: takenBy === 0 ? scorePlayer0 + 1 : scorePlayer0,
    scorePlayer1: takenBy === 1 ? scorePlayer1 + 1 : scorePlayer1
  }), { scorePlayer0: 0, scorePlayer1: 0 })
}
