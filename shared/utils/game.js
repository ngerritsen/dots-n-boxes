const createBoard = require("./board");
const { calculateScores, determineWinner } = require("./score");
const { determineActivePlayer } = require("./players");

function calculateGameState(moves, size) {
  const lastMoveIndex = moves.length - 1;
  const isGameStart = lastMoveIndex < 0;
  const isFirstMove = lastMoveIndex === 0;

  const previousMoves = moves.slice(0, lastMoveIndex);
  const previousBoard = createBoard(size, previousMoves);
  const previousScores = calculateScores(previousBoard);
  const previousPlayer =
    isGameStart || isFirstMove ? 0 : moves[lastMoveIndex].player;

  const board = createBoard(size, moves);
  const isClear = isGameStart;
  const scores = calculateScores(board);
  const activePlayer = isGameStart
    ? 0
    : determineActivePlayer(previousPlayer, previousScores, scores);
  const playerWon = determineWinner(size, scores);

  return {
    activePlayer,
    board,
    isClear,
    scores,
    playerWon,
  };
}

module.exports = {
  calculateGameState,
};
