import React from 'react'
import {connect} from 'react-redux'
import Matter from 'matter-js'
// import {Box} from './world/box'

class Scene extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    // module aliases from MatterJS
    const {Engine, Render, World, Bodies, Mouse, MouseConstraint} = Matter

    // create an engine and a world
    const engine = Engine.create({})
    const world = engine.world

    // create a renderer
    const render = Render.create({
      element: this.refs.scene,
      engine,
      options: {
        width: 600,
        height: 600,
        wireframes: false
      }
    })

    // create bodies
    const ballA = Bodies.circle(210, 100, 30, {restitution: 0.5})
    const ballB = Bodies.circle(110, 50, 30, {restitution: 0.5})

    // add walls into the world
    World.add(world, [
      Bodies.rectangle(200, 0, 600, 50, {isStatic: true}),
      Bodies.rectangle(200, 600, 600, 50, {isStatic: true}),
      Bodies.rectangle(600, 300, 50, 600, {isStatic: true}),
      Bodies.rectangle(0, 300, 50, 600, {isStatic: true})
    ])

    // add balls into the world
    World.add(world, [ballA, ballB])

    // add mouse constraint
    const mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
        mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false
          }
        }
      })

    // add the mouse constraint to the world
    World.add(world, mouseConstraint)

    Matter.Events.on(mouseConstraint, 'mousedown', function(event) {
      World.add(engine.world, Bodies.circle(150, 50, 30, {restitution: 0.7}))
    })

    // run the engine
    Engine.run(engine)

    // run the render
    Render.run(render)
  }

  render() {
    return <div ref="scene" />
  }
}

export default connect(null)(Scene)
