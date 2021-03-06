export const getSize = (name) => (props) => props.theme.sizes[name];
export const getRadius = (name) => (props) => props.theme.radii[name];
export const getColor = (name) => (props) => props.theme.colors[name];
export const getBreakpoint = (name) => (props) => props.theme.breakpoints[name];
export const isDark = () => (props) => props.theme.dark;
export const getPlayerColor = (player) => (props) =>
  props.theme.colors.players[player];
export const getZIndex = (name) => (props) => props.theme.zIndices[name];

export const prefersDarkMode = () => {
  return (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
};

export const onPrefersDarkModeChange = (callback) => {
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      callback(e.matches);
    });
};
