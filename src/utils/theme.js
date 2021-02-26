export const getSize = (name) => (props) => props.theme.sizes[name];
export const getColor = (name) => (props) => props.theme.colors[name];
export const getPlayerColor = (player) => (props) =>
  props.theme.colors.players[player];
export const getZIndex = (name) => (props) => props.theme.zIndices[name];