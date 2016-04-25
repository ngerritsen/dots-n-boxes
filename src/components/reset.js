import React, { PropTypes } from 'react'

import '../styles/button.scss'

const Reset = ({ isDisabled, reset }) => (
  <button
    type="button"
    className={'button alt-negative' + (isDisabled ? ' is-disabled' : '')}
    onClick={isDisabled ? undefined : reset}
  >
    Reset
  </button>
)

Reset.propTypes = {
  isDisabled: PropTypes.bool.isRequired,
  reset: PropTypes.func.isRequired
}

export default Reset
