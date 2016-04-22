import React, { PropTypes } from 'react'

import Box from './box'
import { BOX_SIZE } from '../constants'

import '../styles/board.scss'

const Board = ({ activePlayer, board, makeMove, playerWon, width }) => (
  <div
    className="board"
    style={{
      width: String(width * BOX_SIZE) + 'px'
    }}
  >
    {
      board.map(({ edges, outer, location, takenBy }, i) => (
        <Box
          key={i}
          activePlayer={activePlayer}
          makeMove={makeMove}
          edges={edges}
          outer={outer}
          playerWon={playerWon}
          takenBy={takenBy}
        />
      ))
    }
  </div>
)

Board.propTypes = {
  activePlayer: PropTypes.number.isRequired,
  board: PropTypes.array.isRequired,
  makeMove: PropTypes.func.isRequired,
  playerWon: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired
}

export default Board
