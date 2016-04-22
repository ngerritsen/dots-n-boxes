import React, { PropTypes } from 'react'

const Score = ({ scorePlayer0, scorePlayer1 }) => (
  <div>
    Blue: {scorePlayer0}, Orange: {scorePlayer1}
  </div>
)

Score.propTypes = {
  scorePlayer0: PropTypes.number.isRequired,
  scorePlayer1: PropTypes.number.isRequired
}

export default Score
