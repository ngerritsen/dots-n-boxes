import React from 'react'

import Board from './board'
import Score from './score'

const Game = () => (
  <div>
    <Board x={4} y={4}/>
    <Score/>
  </div>
)

export default Game
