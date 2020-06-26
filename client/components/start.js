import React from 'react'
import {connect} from 'react-redux'
import {default as Scene} from './scene'
// import {default as P5wrapper} from './p5wrapper'

export const Start = props => {
  return (
    <div>
      <div>
        <h3>Start Page</h3>
        <Scene />
        {/* <P5wrapper /> */}
      </div>
      {/* <div>
        <h3>second div</h3>
      </div>
      <div>
        <h3>third div</h3>
      </div> */}
    </div>
  )
}

export default connect(null)(Start)
