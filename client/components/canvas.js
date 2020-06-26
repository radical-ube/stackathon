import React from 'react'
import {connect} from 'react-redux'
import p5 from 'p5'

class Canvas extends React.Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
  }

  Sketch = sketch => {
    let x = 100
    let y = 100

    sketch.setup = () => {
      sketch.createCanvas(800, 600)
    }
    sketch.draw = () => {
      sketch.background(0)
      sketch.fill(255)
      sketch.rect(x, y, 50, 50)
    }
  }

  componentDidMount() {
    this.myP5 = new p5(this.Sketch, this.myRef.current)
  }

  render() {
    return <div ref={this.myRef} />
  }
}

export default connect(null)(Canvas)
