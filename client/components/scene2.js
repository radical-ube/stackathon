import React from 'react'
import {connect} from 'react-redux'

import Sketch2 from './sketch2'

class Scene2 extends React.Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
    this.state = {
      sketch: Sketch2
    }
  }

  componentDidMount() {
    this.myP5 = new p5(this.state.sketch, this.myRef.current)
  }

  render() {
    return <div ref={this.myRef} />
  }
}

export default connect(null)(Scene2)
