import React from 'react'
import {connect} from 'react-redux'
import {default as Scene} from './scene'

export const Start = props => {
  return (
    <div>
      <h3>Start Page</h3>
      <Scene />
    </div>
  )
}

export default connect(null)(Start)
