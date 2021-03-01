const createBox = require("./box");

const createBoard = (boardSize, moves) => {
  const boardData = [];
  const boxCount = Math.pow(boardSize, 2);

  for (let index = 0; index < boxCount; index++) {
    boardData.push(createBox(index, moves, boardSize));
  }

  return boardData;
};

module.exports = createBoard;
