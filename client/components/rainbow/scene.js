import React, {useState, useEffect} from 'react'
import p5 from 'p5'
import Matter from 'matter-js'

import {addBox, drawBoxes, addBoundaries} from './matter'

const {Engine} = Matter

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
    const mouseInBounds = settings => {
      return (
        p5.mouseX < width &&
        p5.mouseX > 0 &&
        p5.mouseY < height &&
        p5.mouseY > 0
      )
    }
    p5.mouseDragged = () => {
      if (mouseInBounds()) {
        addBox(settings, boxes)
      }
    }
    p5.mousePressed = () => {
      if (mouseInBounds()) {
        addBox(settings, boxes)
      }
    }
    p5.keyTyped = () => {
      // reverse gravity
      if (p5.key === ' ') {
        if (mouseInBounds()) {
          world.gravity.y = world.gravity.y * -1
        }
      }
    }
    p5.keyPressed = () => {
      // alter timeScale
      if (p5.keyCode === p5.DOWN_ARROW) {
        if (mouseInBounds()) {
          if (engine.timing.timeScale > 0.1) {
            engine.timing.timeScale -= 1 / 20
          }
        }
      }
      if (p5.keyCode === p5.UP_ARROW) {
        if (mouseInBounds()) {
          if (engine.timing.timeScale < 1) {
            engine.timing.timeScale += 1 / 20
          }
        }
      }
    }

    // render
    p5.setup = () => {
      p5.createCanvas(width, height)
      addBoundaries(settings, viewScreen)
    }
    p5.draw = () => {
      p5.background(50, 50, 50, 150)
      Engine.update(engine)
      drawBoxes(boxes)
    }
  }

  useEffect(() => {
    const myP5 = new p5(Sketch, ref.current)
  }, [])

  return <div ref={ref} />
}
