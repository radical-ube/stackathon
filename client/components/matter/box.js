import Matter from 'matter-js'
const {Bodies} = Matter

export const boxConstructor = p5 => {
  return function Box(x, y, w, h, color) {
    const options = {
      friction: 0.4,
      restitution: 0.8
    }
    this.body = Bodies.rectangle(x, y, w, h, options)
    this.w = w
    this.h = h
    this.red = color.red
    this.green = color.green
    this.blue = color.blue
    this.alpha = color.alpha

    this.show = function() {
      let pos = this.body.position
      let angle = this.body.angle

      p5.push()
      p5.translate(pos.x, pos.y)
      p5.rotate(angle)
      p5.rectMode(p5.CENTER)
      p5.fill(this.red, this.green, this.blue, this.alpha)
      p5.strokeWeight(1)
      p5.stroke(255, this.alpha)
      p5.rect(0, 0, this.w, this.h)
      p5.pop()
    }
  }
}
