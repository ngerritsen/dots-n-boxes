const BASE_SIZE = 0.4;
const MAX_SIZE = 40;

const sizes = new Array(MAX_SIZE + 1)
  .fill(0)
  .reduce((all, _, i) => ({ ...all, [i]: i * BASE_SIZE + "rem" }), {});

export default {
  colors: {
    fg: "#222",
    bg: "#fff",
    subtleBg: "#d1d8e0",
    primary: "#4b7bec",
    danger: "#eb3b5a",
    players: ["#45aaf2", "#fa8231"],
  },
  sizes: {
    ...sizes,
    box: sizes[18],
    edge: sizes[2],
    boxPadding: sizes[3],
  },
};
