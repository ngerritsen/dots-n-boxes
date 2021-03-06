const calculateScores = (board) =>
  board.reduce(
    (scores, { takenBy }) =>
      takenBy > -1
        ? {
            ...scores,
            [takenBy]: (scores[takenBy] || 0) + 1,
          }
        : scores,
    {}
  );

const determineWinner = (boardSize, scores) => {
  const boxesAmount = Math.pow(boardSize, 2);
  const scoreNeeded = Math.floor(boxesAmount / 2) + 1;

  return Object.keys(scores).reduce(
    (winner, player) =>
      (scores[player] || 0) >= scoreNeeded ? Number(player) : winner,
    -1
  );
};

module.exports = {
  calculateScores,
  determineWinner,
};
