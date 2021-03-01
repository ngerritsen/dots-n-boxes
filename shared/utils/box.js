const { sides } = require("../constants/sides");
const { isSameLineSegment } = require("./lineSegments");
const edge = require("./edge");

const createBox = (index, moves, boardSize) => {
  const location = calculateLocation(index, boardSize);
  const outer = isOuter(location);
  const edges = sides.map((side) => edge(location, side, moves));
  const isTaken = isBoxTaken(edges);
  const takenBy = isTaken ? boxIsTakenBy(edges, moves) : -1;

  return {
    location,
    outer,
    edges,
    takenBy,
  };
};

const isBoxTaken = (edges) =>
  edges.reduce(
    (isTaken, { takenBy }) => (isTaken ? takenBy > -1 : isTaken),
    true
  );

const boxIsTakenBy = (edges, moves) =>
  moves.reduce((takenBy, move) => {
    const matchingEdge = edges.find((e) => isSameLineSegment(e, move));
    return matchingEdge ? matchingEdge.takenBy : takenBy;
  }, -1);

const calculateLocation = (index, boardSize) => [
  index % boardSize,
  Math.floor(index / boardSize),
];

const isOuter = (location) => location[0] === 0 || location[1] === 0;

module.exports = createBox;
