const determineActivePlayer = (
  previousPlayer,
  previousScores,
  currentScores,
  playerCount
) => {
  console.log(playerCount);
  const previousPlayerPreviousScore = previousScores[previousPlayer] || 0;
  const previousPlayerCurrentScore = currentScores[previousPlayer];
  const previousPlayerScored =
    previousPlayerCurrentScore > previousPlayerPreviousScore;

  if (previousPlayerScored) {
    return previousPlayer;
  }

  return getNextPlayer(previousPlayer, playerCount);
};

const getNextPlayer = (previousPlayer, playerCount) =>
  previousPlayer + 1 === playerCount ? 0 : previousPlayer + 1;

module.exports = {
  determineActivePlayer,
  getNextPlayer,
};
