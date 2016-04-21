import React, { PropTypes } from 'react'

import Box from './box'
import { BOX_SIZE } from '../constants'
import { generateGrid } from '../helpers/grid'

import '../styles/board.scss'

const Board = ({ makeMove, moves, width, height }) => (
  <div
    className="board"
    style={{
      width: String(width * BOX_SIZE) + 'px'
    }}
  >
    {
      generateGrid(width, height)
        .map(({ outer, location }, i) => (
          <Box
            key={i}
            makeMove={makeMove}
            moves={moves}
            outer={outer}
            location={location}
          />
        ))
    }
  </div>
)

Board.propTypes = {
  makeMove: PropTypes.func.isRequired,
  moves: PropTypes.array.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
}

export default Board
