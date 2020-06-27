import Matter from 'matter-js'
import {boxConstructor} from './box'
import {boundaryConstructor} from './boundary'
const {Engine, World} = Matter

const engine = Engine.create()
const world = engine.world

let width = window.innerWidth
let height = window.innerHeight * 0.8

const Sketch2 = p5 => {
  // constructors
  const Box = boxConstructor(p5)
  const Boundary = boundaryConstructor(p5)

  // bodies
  const boxes = []
  let ground = new Boundary(width / 2, height, width * 2, 10)

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
    World.add(world, [ground.body])
    p5.createDiv('div text')
    p5.createP('p text')
  }
  p5.draw = () => {
    p5.background(51)
    for (let i = 0; i < boxes.length; i++) {
      boxes[i].show()
    }
    ground.show()
  }
  p5.windowResized = () => {
    width = window.innerWidth
    height = window.innerHeight / 2
    p5.resizeCanvas(width, height)
    ground.w = width
    ground.x = width / 2
  }
}

export default Sketch2

// constraint experimentation
// if (i >= 2) {
//   const options = {
//     bodyA: boxes[i].body,
//     bodyB: boxes[i - 1].body,
//     length: 25,
//     stiffness: 0.4
//   }
//   const constraint = Constraint.create(options)
//   World.add(world, constraint)
// }
