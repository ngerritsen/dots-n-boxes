import React, { PropTypes } from 'react'

import '../styles/edge.scss'

const Edge = ({ activePlayer, lineEnd, lineStart, makeMove, side, takenBy }) => (
  <div
    className={
      'edge' +
      (takenBy !== -1 ? ` is-taken-by-player-${takenBy}` : '') +
      ` alt-${side}` +
      ` alt-active-player-${activePlayer}`
    }
    onClick={takenBy === -1 && (() => makeMove(activePlayer, lineStart, lineEnd))}
  >
  </div>
)

Edge.propTypes = {
  activePlayer: PropTypes.number.isRequired,
  lineEnd: PropTypes.array.isRequired,
  lineStart: PropTypes.array.isRequired,
  makeMove: PropTypes.func.isRequired,
  side: PropTypes.string.isRequired,
  takenBy: PropTypes.number.isRequired
}

export default Edge
