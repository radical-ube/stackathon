import React from 'react'
import {connect} from 'react-redux'
import Matter from 'matter-js'
// import Box from './matter/bodies'
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
    console.log('myP5', this.myP5)
    console.log('state: sketch', this.state.sketch)
  }

  render() {
    // console.log(this.state.sketch)
    return <div ref={this.myRef} />
  }
}

export default connect(null)(Scene2)
