import Matter from 'matter-js'
import {boxConstructor} from '../matter/box'
import {boundaryConstructor} from '../matter/boundary'
const {Engine, World} = Matter

const engine = Engine.create()
const world = engine.world

let width = window.innerWidth
let height = window.innerHeight * 0.8

const Sketch = p5 => {
  // constructors
  const Box = boxConstructor(p5)
  const Boundary = boundaryConstructor(p5)

  // bodies
  const boxes = []
  let ground = new Boundary(width / 2, height, width * 2, 10)

  p5.mouseDragged = () => {
    const red = p5.floor(p5.random(200, 255))
    const green = p5.floor(p5.random(100, 150))
    const blue = 0
    const alpha = p5.floor(p5.random(150, 255))
    const box = new Box(
      p5.mouseX,
      p5.mouseY,
      p5.random(10, 40),
      p5.random(10, 40),
      {red, green, blue, alpha}
    )
    World.add(world, box.body)
    boxes.push(box)
  }

  // render
  p5.setup = () => {
    p5.createCanvas(width, height)
    Engine.run(engine)

    World.add(world, [ground.body])
  }
  p5.draw = () => {
    p5.background(50, 50, 50, 150)
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

export default Sketch
