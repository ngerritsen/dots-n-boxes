import React, { PropTypes } from 'react'

import connectGame from '../connectors/game'
import Board from './board'
import Score from './score'

const Game = ({ board, makeMove, width }) => (
  <div className="container">
    <h1 className="title">Boxes</h1>
    <Board board={board} makeMove={makeMove} width={width}/>
    <Score/>
  </div>
)

Game.propTypes = {
  board: PropTypes.array.isRequired,
  makeMove: PropTypes.func.isRequired,
  width: PropTypes.number.isRequired
}

export default connectGame(Game)
