import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { makeMove } from '../actions/game'
import board from '../factories/board'

function mapStateToProps (state) {
  const { width, height, moves } = state
  return {
    board: board(width, height, moves),
    width
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ makeMove }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)
