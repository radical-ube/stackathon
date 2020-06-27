import Matter from 'matter-js'
import {boxConstructor} from './box'
const {Engine, World, Bodies, Mouse, MouseConstraint} = Matter

const engine = Engine.create()
const world = engine.world

let width = 600
let height = 400

const Sketch = p5 => {
  // constructors
  const Box = boxConstructor(p5)

  // bodies
  const boxes = []
  let boxA = new Box(400, 100, 80, 80)
  let boxB = new Box(440, 140, 80, 80)
  let ground = Bodies.rectangle(300, height, width, 10, {isStatic: true})

  p5.mouseDragged = () => {
    const box = new Box(
      p5.mouseX,
      p5.mouseY,
      p5.random(10, 40),
      p5.random(10, 40)
    )
    World.add(world, box.body)
    boxes.push(box)
  }

  // render
  p5.setup = () => {
    p5.createCanvas(width, height)
    Engine.run(engine)

    World.add(world, [boxA.body, boxB.body, ground])
  }
  p5.draw = () => {
    p5.background(51)
    for (let i = 0; i < boxes.length; i++) {
      boxes[i].show()
    }
    boxA.show()
    boxB.show()
    p5.stroke(255)
    p5.fill(170)
    p5.rectMode(p5.CENTER)
    p5.rect(300, height, width, 10)
    // ground.show()
  }
}

export default Sketch
