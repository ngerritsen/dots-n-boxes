import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import Game from './components/game'
import store from './store'

import './styles/global.scss'

ReactDOM.render(
  <Provider store={store}>
    <Game/>
  </Provider>,
  document.getElementById('root')
)
