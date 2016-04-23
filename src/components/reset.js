import React, { PropTypes } from 'react'

import '../styles/button.scss'

const Reset = ({ reset }) => (
  <button type="button" className="button" onClick={reset}>Reset</button>
)

Reset.propTypes = {
  reset: PropTypes.func.isRequired
}

export default Reset