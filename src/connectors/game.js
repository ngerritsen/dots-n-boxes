import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from '../actions/game'
import { calculateGameViewState } from '../helpers/game'

function mapStateToProps (state) {
  return calculateGameViewState(state)
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)
