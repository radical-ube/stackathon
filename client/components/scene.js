import React from 'react'
import {connect} from 'react-redux'
import Matter from 'matter-js'
// import Box from './matter/bodies'
import {Sketch} from './sketch'

class Scene extends React.Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
    this.state = {
      sketch: Sketch
    }
  }

  // Sketch = sketch => {
  //   const { Engine, World, Bodies, Mouse, MouseConstraint } = Matter

  //   this.setState({ sketch: sketch })
  //   console.log('sketch', sketch)
  //   let engine
  //   let world
  //   // bodies
  //   let boxA = Bodies.rectangle(400, 200, 80, 80)
  //   let boxB = Bodies.rectangle(440, 240, 80, 80)
  //   let ground = Bodies.rectangle(400, 380, 810, 60, { isStatic: true })

  //   sketch.setup = () => {
  //     sketch.createCanvas(800, 600)
  //     engine = Engine.create()
  //     world = engine.world

  //     Engine.run(engine)
  //     World.add(world, [boxA, boxB, ground])

  //   }
  //   sketch.draw = () => {
  //     sketch.background(0)
  //     sketch.fill(255)
  //     sketch.rect(boxA.position.x, boxA.position.y, 80, 80)
  //     sketch.rect(boxB.position.x, boxB.position.y, 80, 80)
  //   }
  // }

  componentDidMount() {
    this.myP5 = new p5(this.state.sketch, this.myRef.current)
    console.log(this.myP5)
  }

  render() {
    // console.log(this.state.sketch)
    return <div ref={this.myRef} />
  }
}

export default connect(null)(Scene)
