export function determineActivePlayer(
  previousPlayer,
  previousScore,
  currentScore
) {
  const previousPlayerPreviousScore =
    previousScore["scorePlayer" + previousPlayer];
  const previousPlayerCurrentScore =
    currentScore["scorePlayer" + previousPlayer];
  const previousPlayerScored =
    previousPlayerCurrentScore > previousPlayerPreviousScore;

  if (previousPlayerScored) {
    return previousPlayer;
  }

  return getNextPlayer(previousPlayer, 2);
}

function getNextPlayer(previousPlayer, playerCount) {
  if (previousPlayer + 1 === playerCount) {
    return 0;
  }

  return previousPlayer + 1;
}
