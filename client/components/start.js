import React from 'react'
import {connect} from 'react-redux'
import {default as Canvas} from './canvas'

export const Start = props => {
  return (
    <div>
      <h3>Start Page</h3>
      <Canvas />
    </div>
  )
}

export default connect(null)(Start)
