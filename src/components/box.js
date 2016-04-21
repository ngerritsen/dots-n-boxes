import React, { PropTypes } from 'react'

import Edge from './edge'
import { calculateLineSegment, edgeIsTaken } from '../helpers/line'
import { isCellTaken } from '../helpers/cell'

import '../styles/box.scss'

const sides = [ 'bottom', 'right' ]
const outerSides = [ 'top', 'left', ...sides ]

const Box = ({ makeMove, moves, outer, location }) => {
  const usedSides = outer ? outerSides : sides
  const edgeData = usedSides.map(side => {
    const { lineStart, lineEnd } = calculateLineSegment(location, side)
    const taken = edgeIsTaken(lineStart, lineEnd, moves)

    return {
      lineStart,
      lineEnd,
      taken,
      side
    }
  })

  return (
    <div className="box">
      {
        edgeData.map(({ lineStart, lineEnd, taken, side }) => (
          <Edge
            key={side}
            location={location}
            lineStart={lineStart}
            lineEnd={lineEnd}
            makeMove={makeMove}
            taken={taken}
            side={side}
          />
        ))
      }

      {
        isCellTaken(edgeData) &&
        <div className="box--fill"></div>
      }
    </div>
  )
}

Box.propTypes = {
  makeMove: PropTypes.func.isRequired,
  moves: PropTypes.array.isRequired,
  outer: PropTypes.bool,
  location: PropTypes.array.isRequired
}

export default Box
