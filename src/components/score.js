import React, { PropTypes } from 'react'

import '../styles/score.scss'

const Score = ({ activePlayer, playerWon, scorePlayer0, scorePlayer1 }) => (
  <div className="score">
    <span className={'score--item alt-player-0' + (activePlayer === 0 ? ' is-active' : '')}>
      {scorePlayer0}
      { playerWon === 0 && <strong> Won!</strong> }
    </span>
    <span className={'score--item alt-player-1' + (activePlayer === 1 ? ' is-active' : '')}>
      {scorePlayer1}
      { playerWon === 1 && <strong> Won!</strong> }
    </span>
  </div>
)

Score.propTypes = {
  activePlayer: PropTypes.number.isRequired,
  playerWon: PropTypes.number.isRequired,
  scorePlayer0: PropTypes.number.isRequired,
  scorePlayer1: PropTypes.number.isRequired
}

export default Score
