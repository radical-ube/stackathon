import React from 'react'
import {connect} from 'react-redux'
import p5 from 'p5'
import Matter from 'matter-js'

class Scene extends React.Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
  }

  Sketch = sketch => {
    // module aliases from MatterJS
    const {Engine, World, Bodies, Mouse, MouseConstraint} = Matter

    // create an engine and a world
    const engine = Engine.create({})
    const world = engine.world
    // run the engine
    Engine.run(engine)

    // create bodies
    let boxA
    let boxB
    let ground

    sketch.setup = () => {
      sketch.createCanvas(800, 600)

      boxA = Bodies.rectangle(400, 200, 80, 80)
      boxB = Bodies.rectangle(450, 50, 80, 80)
      ground = Bodies.rectangle(400, 510, 810, 60, {
        isStatic: true
      })

      // add your objects into the world
      World.add(world, [boxA, boxB, ground])
      console.log(boxA, boxB)
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
