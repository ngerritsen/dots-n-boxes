export function isCellTaken(edgeData) {
  return edgeData.reduce((isTaken, { taken }) => {
    return taken ? taken : false
  }, true)
}
