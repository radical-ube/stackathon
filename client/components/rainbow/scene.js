import React, {useState, useEffect} from 'react'
import p5 from 'p5'

import Matter from 'matter-js'
import {boxConstructor} from './matter/box'
import {boundaryConstructor} from './matter/boundary'

const {Engine, World} = Matter

export const Scene = props => {
  const [myRef, setMyRef] = useState(React.createRef())

  const Sketch = p5 => {
    const engine = Engine.create()
    const world = engine.world

    let width = window.innerWidth
    let height = window.innerHeight * 0.8
    // constructors
    const Box = boxConstructor(p5, world, engine)
    const Boundary = boundaryConstructor(p5, world)

    // bodies
    const boxes = []
    let ground = new Boundary(width / 2, height, width, 10)
    let wall1 = new Boundary(width / width - 21, height / 2, 5, height)
    let wall2 = new Boundary(width / 6 + 20, height / 2, 5, height)

    p5.mouseDragged = () => {
      if (p5.mouseX < width / 6 + 10 && p5.mouseX > width / width - 11) {
        let color = props.getColor()

        const box = new Box(
          p5.mouseX,
          p5.mouseY,
          p5.random(10, 40),
          p5.random(10, 40),
          color
        )
        World.add(world, box.body)
        boxes.push(box)
      }
    }

    p5.keyPressed = () => {
      if (p5.keyCode === p5.UP_ARROW) {
        engine.timing.timeScale += 0.1
      } else if (p5.keyCode === p5.DOWN_ARROW) {
        engine.timing.timeScale -= 0.1
      } else if (p5.keyCode === p5.ENTER) {
        engine.timing.timeScale = 1
      }
      console.log(engine.timing.timeScale)
    }

    // render
    p5.setup = () => {
      p5.createCanvas(width, height)
      // Engine.run(engine)

      World.add(world, [ground.body, wall1.body, wall2.body])
    }
    p5.draw = () => {
      p5.background(50, 50, 50, 150)
      Engine.update(engine)
      for (let i = 0; i < boxes.length; i++) {
        boxes[i].show()
        if (boxes[i].isOffScreen()) {
          World.remove(world, boxes[i].body)
          boxes.splice(i, 1)
          i--
        }
      }
    }
    p5.windowResized = () => {
      width = window.innerWidth
      height = window.innerHeight / 2
      p5.resizeCanvas(width, height)
      ground.w = width
      ground.x = width / 2
      World.clear(world, false)
    }
  }

  useEffect(() => {
    const myP5 = new p5(Sketch, myRef.current)
  }, [])

  return <div ref={myRef} />
}
