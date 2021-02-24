import box from "./box";

export default function board(width, height, moves) {
  const boardData = [];
  const boxCount = width * height;

  for (let index = 0; index < boxCount; index++) {
    boardData.push(box(index, moves, width, height));
  }

  return boardData;
}
