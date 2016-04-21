import React, { PropTypes } from 'react'

import Box from './box'
import { BOX_SIZE } from '../constants'
import { generateGrid } from '../helpers/grid'

import '../styles/board.scss'

const Board = ({ x, y }) => (
  <div
    className="board"
    style={{
      width: String(x * BOX_SIZE) + 'px'
    }}
  >
    {generateGrid(x, y).map(outer => <Box outer={outer}/>)}
  </div>
)

Board.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
}

export default Board
