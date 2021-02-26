import createBoard from "../factories/board";
import { calculateScores, determineWinner } from "./score";
import { determineActivePlayer } from "./players";

export function calculateGameViewState({ width, height, moves }) {
  const lastMoveIndex = moves.length - 1;
  const isGameStart = lastMoveIndex < 0;
  const isFirstMove = lastMoveIndex === 0;

  const previousMoves = moves.slice(0, lastMoveIndex);
  const previousBoard = createBoard(width, height, previousMoves);
  const previousScores = calculateScores(previousBoard);
  const previousPlayer =
    isGameStart || isFirstMove ? 0 : moves[lastMoveIndex].player;

  const board = createBoard(width, height, moves);
  const isClear = isGameStart;
  const scores = calculateScores(board);
  const activePlayer = isGameStart
    ? 0
    : determineActivePlayer(previousPlayer, previousScores, scores);
  const playerWon = determineWinner(width, height, scores);

  return {
    activePlayer,
    board,
    isClear,
    width,
    scores,
    playerWon,
  };
}
