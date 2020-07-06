import React, {useState, useEffect} from 'react'
import p5 from 'p5'

import Matter from 'matter-js'
import {addBox} from './matter/box'
import {boundaryConstructor} from './matter/boundary'

export const Scene = props => {
  const [ref, setRef] = useState(React.createRef())
  const {Engine, World} = Matter

  const Sketch = p5 => {
    const engine = Engine.create()
    const world = engine.world
    let width = window.innerWidth / 6
    let height = window.innerHeight * 0.8

    const settings = {p5, world, props}
    // constructors
    const Boundary = boundaryConstructor(p5, world)

    // bodies
    const boxes = []
    let ground = new Boundary(width / 2, height, width, 10)
    let wall1 = new Boundary(width / width - 6, height / 2, 5, height)
    let wall2 = new Boundary(width + 5, height / 2, 5, height)

    const mouseInBounds = () => {
      return (
        p5.mouseX < width &&
        p5.mouseX > width / width - 1 &&
        p5.mouseY < height &&
        p5.mouseY > height / height - 1
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
    p5.keyPressed = () => {
      if (p5.keyCode === p5.ENTER) {
        if (mouseInBounds()) {
          console.log('i am in ', props.getColor)
        }
      }
    }

    // render
    p5.setup = () => {
      p5.createCanvas(width, height)

      World.add(world, [ground.body, wall1.body, wall2.body])
    }
    p5.draw = () => {
      p5.background(50, 50, 50, 150)
      Engine.update(engine)
      for (let i = 0; i < boxes.length; i++) {
        boxes[i].show()
        if (boxes[i].isOffScreen()) {
          boxes[i].removeFromWorld()
          boxes.splice(i, 1)
          i--
        }
        if (i > 75) {
          boxes[0].removeFromWorld()
          boxes.splice(0, 1)
          i--
        }
      }
    }
  }

  useEffect(() => {
    const myP5 = new p5(Sketch, ref.current)
  }, [])

  return <div ref={ref} />
}
