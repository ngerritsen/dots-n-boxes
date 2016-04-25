import React, { PropTypes } from 'react'

import connectGame from '../connectors/game'
import Board from './board'
import Score from './score'
import Reset from './reset'
import Resize from './resize'

const Game = props => (
  <div className="container">
    <h1 className="title">Boxes</h1>
    <Score
      activePlayer={props.activePlayer}
      playerWon={props.playerWon}
      scorePlayer0={props.scorePlayer0}
      scorePlayer1={props.scorePlayer1}
    />
    <Board
      activePlayer={props.activePlayer}
      board={props.board}
      makeMove={props.makeMove}
      playerWon={props.playerWon}
      width={props.width}
    />
    <Resize isDisabled={!props.isClear} resize={props.resize}/>
    <Reset isDisabled={props.isClear} reset={props.reset}/>
  </div>
)

Game.propTypes = {
  activePlayer: PropTypes.number.isRequired,
  board: PropTypes.array.isRequired,
  isClear: PropTypes.bool.isRequired,
  makeMove: PropTypes.func.isRequired,
  playerWon: PropTypes.number.isRequired,
  reset: PropTypes.func.isRequired,
  scorePlayer0: PropTypes.number.isRequired,
  scorePlayer1: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired
}

export default connectGame(Game)
