export function calculateScore(board) {
  return board.reduce(
    ({ scorePlayer0, scorePlayer1 }, { takenBy }) => ({
      scorePlayer0: takenBy === 0 ? scorePlayer0 + 1 : scorePlayer0,
      scorePlayer1: takenBy === 1 ? scorePlayer1 + 1 : scorePlayer1,
    }),
    { scorePlayer0: 0, scorePlayer1: 0 }
  );
}

export function determineWhoWon(
  boardWidth,
  boardHeight,
  { scorePlayer0, scorePlayer1 }
) {
  const boxesAmount = boardWidth * boardHeight;
  const scoreNeeded = Math.ceil(boxesAmount / 2);

  if (scorePlayer0 >= scoreNeeded) {
    return 0;
  }

  if (scorePlayer1 >= scoreNeeded) {
    return 1;
  }

  return -1;
}
