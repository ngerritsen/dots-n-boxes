import React, { PropTypes } from 'react'

import Box from './box'
import { BOX_SIZE } from '../constants'

import '../styles/board.scss'

const Board = ({ board, makeMove, width }) => (
  <div
    className="board"
    style={{
      width: String(width * BOX_SIZE) + 'px'
    }}
  >
    {
      board.map(({ edges, outer, location, taken }, i) => (
        <Box
          key={i}
          makeMove={makeMove}
          edges={edges}
          outer={outer}
          taken={taken}
        />
      ))
    }
  </div>
)

Board.propTypes = {
  board: PropTypes.array.isRequired,
  makeMove: PropTypes.func.isRequired,
  width: PropTypes.number.isRequired
}

export default Board
