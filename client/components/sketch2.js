import Matter from 'matter-js'
import {boxConstructor} from './box'
const {Engine, World, Bodies, Mouse, MouseConstraint} = Matter

const engine = Engine.create()
const world = engine.world

let width = 600
let height = 400

const Sketch2 = p5 => {
  // constructors
  const Box = boxConstructor(p5)

  // bodies
  const boxes = []
  let boxA = new Box(400, 100, 80, 80)
  let boxB = new Box(440, 140, 80, 80)
  let ground = new Box(300, 400, 810, 60, {isStatic: true})

  p5.mouseDragged = () => {
    const box = new Box(p5.mouseX, p5.mouseY, 50, 50)
    World.add(world, box.body)
    boxes.push(box)
  }

  // render
  p5.setup = () => {
    p5.createCanvas(width, height)
    Engine.run(engine)

    World.add(world, [boxA.body, boxB.body, ground.body])
  }
  p5.draw = () => {
    p5.background(0)
    p5.fill(255)
    boxA.show()
    boxB.show()
    ground.show()
    for (let i = 0; i < boxes.length; i++) {
      boxes[i].show()
    }
  }
}

export default Sketch2
