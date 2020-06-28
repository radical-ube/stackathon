import React from 'react'
import {connect} from 'react-redux'

// p5 sketches
import {default as Scene} from './questions/scene'

const Questions = props => {
  return (
    <div>
      <Scene />
    </div>
  )
}

export default connect(null)(Questions)
