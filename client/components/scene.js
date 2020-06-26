import React from 'react'
import {connect} from 'react-redux'
import Matter from 'matter-js'

class Scene extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    // module aliases from MatterJS
    const {
      Engine,
      Render,
      Runner,
      Composites,
      World,
      Body,
      Mouse,
      MouseConstraint,
      Bodies
    } = Matter

    // create an engine and a world
    const engine = Engine.create({})
    const world = engine.world

    // create a renderer
    const render = Render.create({
      element: this.refs.scene,
      engine,
      options: {
        width: 800,
        height: 600,
        showAngleIndicator: true
        // wireframes: false
      }
    })

    // run the render
    Render.run(render)

    // create a runner
    const runner = Runner.create()
    Runner.run(runner, engine)

    // create cloth with options
    const group = Body.nextGroup(true)
    const particleOptions = {
      friction: 0.00001,
      collisionFilter: {group: group},
      render: {visible: false}
    }
    const constraintOptions = {stiffness: 0.06}

    const cloth = Composites.softBody(
      200,
      100,
      20,
      12,
      5,
      5,
      false,
      8,
      particleOptions,
      constraintOptions
    )

    for (let i = 0; i < 20; i++) {
      cloth.bodies[i].isStatic = true
    }

    // add cloth into the world
    World.add(world, [cloth])

    // add mouse constraint
    const mouse = Mouse.create(render.canvas)
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: 0.98,
        render: {
          visible: false
        }
      }
    })

    // add the mouse constraint to the world
    World.add(world, mouseConstraint)

    // keep mouse in sync with rendering
    render.mouse = mouse

    // fit the render viewport to the scene
    Render.lookAt(render, {
      min: {x: 0, y: 0},
      max: {x: 800, y: 600}
    })

    // Matter.Events.on(mouseConstraint, 'mousedown', function (event) {
    //   World.add(engine.world, Bodies.circle(150, 50, 30, { restitution: 0.7 }))
    // })

    // run the engine
    Engine.run(engine)
  }

  render() {
    return <div ref="scene" />
  }
}

export default connect(null)(Scene)
