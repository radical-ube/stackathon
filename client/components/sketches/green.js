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
  // let ground = new Boundary(width / 2, height + 50, width, 10)
  let wall1 = new Boundary(width / width - 21, height + 50, 20, height * 2)
  let wall2 = new Boundary(width / 6 + 20, height + 50, 20, height * 2)

  p5.mouseDragged = () => {
    if (p5.mouseX < width / 6 + 20 && p5.mouseX > width / width - 21) {
      const hue = p5.floor(p5.random(82, 120))
      const saturation = p5.floor(p5.random(70, 85))
      const lightness = p5.floor(p5.random(35, 45))
      const alpha = p5.floor(p5.random(85, 100))
      const box = new Box(
        p5.mouseX,
        p5.mouseY,
        p5.random(10, 40),
        p5.random(10, 40),
        {hue, saturation, lightness, alpha}
      )
      World.add(world, box.body)
      boxes.push(box)
    }
  }

  // render
  p5.setup = () => {
    p5.createCanvas(width, height)
    Engine.run(engine)

    World.add(world, [wall1.body, wall2.body])
  }
  p5.draw = () => {
    p5.background(50, 50, 50, 150)
    for (let i = 0; i < boxes.length; i++) {
      boxes[i].show()
      if (boxes[i].isOffScreen()) {
        World.remove(world, boxes[i].body)
        boxes.splice(i, 1)
        i--
      }
    }
    // ground.show()
  }
  p5.windowResized = () => {
    width = window.innerWidth
    height = window.innerHeight / 2
    p5.resizeCanvas(width, height)
    // ground.w = width
    // ground.x = width / 2
  }
}

export default Sketch
