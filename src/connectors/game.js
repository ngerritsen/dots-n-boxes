import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { makeMove } from '../actions/game'
import { calculateGameState } from '../helpers/game'

function mapStateToProps (state) {
  return calculateGameState(state)
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ makeMove }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)
