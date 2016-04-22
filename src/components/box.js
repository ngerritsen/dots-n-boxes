import React, { PropTypes } from 'react'

import Edge from './edge'

import '../styles/box.scss'

const Box = ({ makeMove, edges, outer, taken }) => (
  <div className="box">
    {
      edges
        .filter(({ side }) => outer || (side !== 'top' && side !== 'left'))
        .map(({ lineStart, lineEnd, taken: edgeTaken, side }) => (
          <Edge
            key={side}
            lineStart={lineStart}
            lineEnd={lineEnd}
            makeMove={makeMove}
            taken={edgeTaken}
            side={side}
          />
        ))
    }
    {taken && <div className="box--fill"></div>}
  </div>
)

Box.propTypes = {
  edges: PropTypes.array.isRequired,
  makeMove: PropTypes.func.isRequired,
  outer: PropTypes.bool,
  taken: PropTypes.bool
}

export default Box
