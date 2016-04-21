import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { makeMove } from '../actions/game'
import Board from './board'
import Score from './score'

const Game = props => (
  <div className="container">
    <h1 className="title">Dots 'n boxes</h1>
    <Board width={4} height={4} {...props}/>
    <Score/>
  </div>
)

function mapStateToProps (state) {
  return state
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ makeMove }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)
