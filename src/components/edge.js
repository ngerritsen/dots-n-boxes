import React, { PropTypes } from 'react'

import '../styles/edge.scss'

const Edge = ({ lineEnd, lineStart, makeMove, side, taken }) => (
  <div
    className={'edge' + (taken ? ' is-taken' : '') + ` alt-${side}`}
    onClick={!taken && (() => makeMove(1, lineStart, lineEnd))}
  >
  </div>
)

Edge.propTypes = {
  lineEnd: PropTypes.array.isRequired,
  lineStart: PropTypes.array.isRequired,
  makeMove: PropTypes.func.isRequired,
  side: PropTypes.string.isRequired,
  taken: PropTypes.bool
}

export default Edge
