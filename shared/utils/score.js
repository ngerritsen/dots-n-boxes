const calculateScores = (board) =>
  board.reduce(
    ([scorePlayer0, scorePlayer1], { takenBy }) => [
      takenBy === 0 ? scorePlayer0 + 1 : scorePlayer0,
      takenBy === 1 ? scorePlayer1 + 1 : scorePlayer1,
    ],
    [0, 0]
  );

const determineWinner = (boardSize, scores) => {
  const boxesAmount = Math.pow(boardSize, 2);
  const scoreNeeded = Math.ceil(boxesAmount / 2);

  return scores.reduce(
    (winner, score, index) => (score >= scoreNeeded ? index : winner),
    -1
  );
};

module.exports = {
  calculateScores,
  determineWinner,
};
