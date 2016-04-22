import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { makeMove } from '../actions/game'
import { calculateGameViewState } from '../helpers/game'

function mapStateToProps (state) {
  return calculateGameViewState(state)
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ makeMove }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)
