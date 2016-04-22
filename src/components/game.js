import React, { PropTypes } from 'react'

import connectGame from '../connectors/game'
import Board from './board'
import Score from './score'

const Game = ({ activePlayer, board, makeMove, width }) => (
  <div className="container">
    <h1 className="title">Boxes</h1>
    <Board activePlayer={activePlayer} board={board} makeMove={makeMove} width={width}/>
    <Score/>
  </div>
)

Game.propTypes = {
  activePlayer: PropTypes.number.isRequired,
  board: PropTypes.array.isRequired,
  makeMove: PropTypes.func.isRequired,
  width: PropTypes.number.isRequired
}

export default connectGame(Game)
