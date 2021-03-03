import { lighten } from "polished";

const BASE_SIZE = 0.4;
const MAX_SIZE = 40;

const sizes = new Array(MAX_SIZE + 1)
  .fill(0)
  .reduce((all, _, i) => ({ ...all, [i]: i * BASE_SIZE + "rem" }), {});

export default {
  colors: {
    fg: "#222",
    bg: "#fff",
    invertedFg: "#fff",
    subtleBg: lighten(0.05, "#d1d8e0"),
    neutral: "#4b6584",
    primary: "#4b7bec",
    success: "#20bf6b",
    gold: "#f7b731",
    danger: "#eb3b5a",
    players: ["#45aaf2", "#fa8231"],
  },
  radii: {
    rounded: "99rem",
    default: sizes[3],
  },
  sizes: {
    ...sizes,
    box: sizes[20],
    edge: sizes[2],
    boxPadding: sizes[3],
  },
};
