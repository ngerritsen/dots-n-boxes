import React, { PropTypes } from 'react'

import '../styles/edge.scss'

const Edge = ({ position }) => (
  <div className={`edge alt-${position}`}></div>
)

Edge.propTypes = {
  position: PropTypes.string.isRequired
}

export default Edge
