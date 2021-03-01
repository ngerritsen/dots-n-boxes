const boardSizes = require("../shared/boardSizes");
const { calculateGameState } = require("../shared/utils/game");
const createPlayer = require("./player");

const maxPlayers = 2;

const createGame = () => {
  let players = [];
  let moves = [];
  let boardSize = 4;

  const isFull = () => players.length >= maxPlayers;

  const join = (token) => {
    if (token) {
      const player = players.find((p) => p.getToken() === token);

      if (player) {
        return player;
      }
    }

    if (isFull()) {
      throw new Error("Game is full.");
    }

    const player = createPlayer(players.length);

    players = [...players, player];

    return player;
  };

  const getBoardSize = () => boardSize;
  const setBoardSize = (size) => {
    if (!boardSizes.includes(size)) {
      throw new Error("Invalid board size.");
    }

    if (moves.length > 0) {
      throw new Error("Board is not empty.");
    }

    boardSize = size;
  };

  const resetMoves = () => {
    moves = [];
  };
  const getMoves = () => moves;
  const makeMove = (move) => {
    const gameState = calculateGameState(moves, boardSize);

    if (gameState.playerWon > -1) {
      throw new Error("A player already won.");
    }

    if (gameState.activePlayer !== move.player) {
      throw new Error("It is not your turn.");
    }

    moves = [...moves, move];
  };

  return {
    isFull,
    join,
    makeMove,
    getMoves,
    resetMoves,
    getBoardSize,
    setBoardSize,
  };
};

module.exports = createGame;
