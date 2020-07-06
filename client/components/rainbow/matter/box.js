import Matter from 'matter-js'
const {Bodies, World} = Matter

const boxConstructor = (p5, world) => {
  return function Box(x, y, w, h, color) {
    const options = {
      friction: 0.4,
      restitution: 0.8
    }
    this.body = Bodies.rectangle(x, y, w, h, options)
    this.w = w
    this.h = h
    this.hue = color.hue
    this.saturation = color.saturation
    this.lightness = color.lightness
    this.alpha = color.alpha

    this.isOffScreen = function() {
      return this.body.position.y > p5.windowHeight
    }

    this.removeFromWorld = function() {
      World.remove(world, this.body)
    }

    this.show = function() {
      this.pos = this.body.position
      this.angle = this.body.angle
      p5.push()
      p5.translate(this.pos.x, this.pos.y)
      p5.rotate(this.angle)
      p5.rectMode(p5.CENTER)
      p5.colorMode(p5.HSL)
      p5.fill(this.hue, this.saturation, this.lightness, this.alpha)
      p5.strokeWeight(1)
      p5.stroke(this.hue, 100, 65, 100)
      p5.rect(0, 0, this.w, this.h)
      p5.pop()
    }
  }
}

export const addBox = (settings, boxes) => {
  const {p5, world, props} = settings
  const Box = boxConstructor(p5, world)
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
