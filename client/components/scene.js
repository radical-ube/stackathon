import React from 'react'
import {connect} from 'react-redux'

import Sketch from './sketch'

class Scene extends React.Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
    this.state = {
      p5: Sketch
    }
  }

  componentDidMount() {
    this.myP5 = new p5(this.state.p5, this.myRef.current)
  }

  render() {
    return <div ref={this.myRef} />
  }
}

export default connect(null)(Scene)
