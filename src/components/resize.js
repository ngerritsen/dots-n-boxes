import React, { PropTypes } from 'react'

import sizes from '../constants/sizes.js'

import '../styles/button.scss'

const Resize = ({ isDisabled, resize }) => (
  <div>
  {
    sizes.map(({ width, height }) => (
      <button
        type="button"
        className={
          'button alt-default alt-grouped' +
          (isDisabled ? ' is-disabled' : '')
        }
        onClick={() => resize(width, height)}
      >
        {width} x {height}
      </button>
    ))
  }
  </div>
)

Resize.propTypes = {
  isDisabled: PropTypes.bool.isRequired,
  resize: PropTypes.func.isRequired
}

export default Resize
