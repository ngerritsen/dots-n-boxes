import React, { PropTypes } from 'react'

import Edge from './edge'

import '../styles/box.scss'

const Box = ({ outer }) => (
  <div className="box">
    {outer && <Edge position="top"/>}
    {outer && <Edge position="left"/>}

    <Edge position="bottom"/>
    <Edge position="right"/>
  </div>
)

Box.propTypes = {
  outer: PropTypes.bool
}

export default Box
