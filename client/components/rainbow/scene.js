import React, {useState, useEffect} from 'react'
import p5 from 'p5'
import Matter from 'matter-js'

import {addBox, drawBoxes, addBoundaries} from './matter'
import {mouseInBounds, removeFromArray} from './utilities'

const {Engine, Events, World} = Matter

export const Scene = props => {
  const [ref, setRef] = useState(React.createRef())
  const [engine, setEngine] = useState(Engine.create())
  const [world, setWorld] = useState(engine.world)
  const [boxes, setBoxes] = useState([])

  const Sketch = p5 => {
    let width = window.innerWidth / 6
    let height = window.innerHeight * 0.85

    const settings = {p5, engine, world, props}
    const viewScreen = {width, height}

    // controls
    p5.keyTyped = () => {
      // reverse gravity
      if (p5.key === 'f') {
        if (mouseInBounds(settings, viewScreen)) {
          world.gravity.y = world.gravity.y * -1
        }
      }
      // alter timeScale
      if (p5.key === 'a') {
        if (mouseInBounds(settings, viewScreen)) {
          engine.timing.timeScale = 0.3
        }
      }
      if (p5.key === 'd') {
        if (mouseInBounds(settings, viewScreen)) {
          engine.timing.timeScale = 1
        }
      }
    }

    Events.on(engine, 'collisionActive', function(event) {
      const pairs = event.pairs
      for (let i = 0; i < pairs.length; i++) {
        const bodyA = pairs[i].bodyA
        const bodyB = pairs[i].bodyB
        const id = bodyB.id
        if (bodyA.label === 'ground' && bodyB.label === 'color box') {
          World.remove(world, bodyB)
          removeFromArray(boxes, id)
        }
        if (bodyA.label === 'ceiling' && bodyB.label === 'color box') {
          World.remove(world, bodyB)
          removeFromArray(boxes, id)
        }
      }
    })

    // render
    p5.setup = () => {
      p5.createCanvas(width, height)
      addBoundaries(settings, viewScreen)
    }
    p5.draw = () => {
      p5.background(50, 50, 50, 150)
      Engine.update(engine)
      if (p5.keyIsDown(83)) {
        if (mouseInBounds(settings, viewScreen)) {
          addBox(settings, boxes)
        }
      }
      drawBoxes(boxes)
    }
  }

  useEffect(() => {
    const myP5 = new p5(Sketch, ref.current)
  }, [])

  return <div ref={ref} />
}
