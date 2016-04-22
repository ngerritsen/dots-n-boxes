import React, { PropTypes } from 'react'

import connectGame from '../connectors/game'
import Board from './board'
import Score from './score'

const Game = ({ activePlayer, board, makeMove, width, scorePlayer0, scorePlayer1 }) => (
  <div className="container">
    <h1 className="title">Boxes</h1>
    <Score activePlayer={activePlayer} scorePlayer0={scorePlayer0} scorePlayer1={scorePlayer1}/>
    <Board activePlayer={activePlayer} board={board} makeMove={makeMove} width={width}/>
  </div>
)

Game.propTypes = {
  activePlayer: PropTypes.number.isRequired,
  board: PropTypes.array.isRequired,
  makeMove: PropTypes.func.isRequired,
  scorePlayer0: PropTypes.number.isRequired,
  scorePlayer1: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired
}

export default connectGame(Game)
