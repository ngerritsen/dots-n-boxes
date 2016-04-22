import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { makeMove } from '../actions/game'
import { default as createBoard } from '../factories/board'
import { calculateScore } from '../helpers/score'

function mapStateToProps (state) {
  const { width, height, moves } = state
  const activePlayer = moves.length % 2
  const board = createBoard(width, height, moves)
  const { scorePlayer0, scorePlayer1 } = calculateScore(board)

  return {
    activePlayer,
    board,
    width,
    scorePlayer0,
    scorePlayer1
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ makeMove }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)
