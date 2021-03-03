const { nanoid } = require("nanoid");
const boardSizes = require("../shared/boardSizes");
const { calculateGameState } = require("../shared/utils/game");
const { invariant } = require("./utils");

const maxPlayers = 2;

const createGame = ({
  id = nanoid(8),
  players = [],
  moves = [],
  boardSize = 4,
} = {}) => {
  const toJSON = () => ({ id, players, moves, boardSize });
  const getId = () => id;
  const getBoardSize = () => boardSize;
  const getPlayers = () => players;
  const getMoves = () => moves;
  const hasPlayer = (token) => players.indexOf(token) > -1;

  const join = (token) => {
    const player = players.indexOf(token);

    if (hasPlayer(token)) {
      return player;
    }

    invariant(players.length < maxPlayers, "Game is full.");

    players = [...players, token];

    return players.length - 1;
  };

  const setBoardSize = (token, size) => {
    invariant(hasPlayer(token), "Player is not in this game.");
    invariant(boardSizes.includes(size), "Invalid board size");
    invariant(moves.length === 0, "Board is not empty.");

    boardSize = size;
  };

  const resetMoves = (token) => {
    invariant(players.indexOf(token) > -1, "Player is not in this game.");

    moves = [];
  };

  const makeMove = (token, move) => {
    const player = players.indexOf(token);

    invariant(hasPlayer(token), "Player is not in this game.");
    invariant(player === move.player, "Cannot make a move for another player.");

    const gameState = calculateGameState(moves, boardSize);

    invariant(gameState.playerWon === -1, "A player already won.");
    invariant(
      gameState.activePlayer === move.player,
      "It is not this player's turn."
    );

    moves = [...moves, move];
  };

  return {
    join,
    makeMove,
    getMoves,
    resetMoves,
    getBoardSize,
    setBoardSize,
    getId,
    getPlayers,
    toJSON,
  };
};

module.exports = createGame;
