import React from 'react'
import {connect} from 'react-redux'
import p5 from 'p5'
import Matter from 'matter-js'
// import Box from './matter/bodies'

class Scene extends React.Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
  }

  Sketch = sketch => {
    const {Engine, World, Bodies, Mouse, MouseConstraint} = Matter

    let engine
    let world

    // bodies
    let boxA = Bodies.rectangle(400, 200, 80, 80)
    let boxB = Bodies.rectangle(440, 240, 80, 80)
    let ground = Bodies.rectangle(400, 380, 810, 60, {isStatic: true})

    sketch.setup = () => {
      sketch.createCanvas(800, 600)
      engine = Engine.create()
      world = engine.world

      Engine.run(engine)
      World.add(world, [boxA, boxB, ground])

      // const database = firebase.database()
      // const ref = database.ref('scores')

      // const data = {
      //   name: 'DTS',
      //   score: 43
      // }
      // ref.push(data)
    }
    sketch.draw = () => {
      sketch.background(0)
      sketch.fill(255)
      sketch.rect(boxA.position.x, boxA.position.y, 80, 80)
      sketch.rect(boxB.position.x, boxB.position.y, 80, 80)
    }
  }

  componentDidMount() {
    this.myP5 = new p5(this.Sketch, this.myRef.current)
  }

  render() {
    return <div ref={this.myRef} />
  }
}

export default connect(null)(Scene)
