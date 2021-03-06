const createBoard = require("./board");
const { calculateScores, determineWinner } = require("./score");
const { determineActivePlayer } = require("./players");

function calculateGameState(moves, size) {
  const lastMoveIndex = moves.length - 1;
  const started = moves.length > 0;

  const previousMoves = moves.slice(0, lastMoveIndex);
  const previousBoard = createBoard(size, previousMoves);
  const previousScores = calculateScores(previousBoard);
  const previousPlayer = !started ? 0 : moves[lastMoveIndex].player;

  const board = createBoard(size, moves);
  const scores = calculateScores(board);
  const activePlayer = !started
    ? 0
    : determineActivePlayer(previousPlayer, previousScores, scores);
  const winner = determineWinner(size, scores);
  const finished = winner > -1 || board.every((box) => box.takenBy > -1);

  return {
    activePlayer,
    board,
    started,
    scores,
    winner,
    finished,
  };
}

module.exports = {
  calculateGameState,
};
