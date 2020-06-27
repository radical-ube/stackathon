import Matter from 'matter-js'
const {Bodies, Engine, World} = Matter

export const boxConstructor = p5 => {
  return function Box(x, y, w, h, options) {
    this.body = Bodies.rectangle(x, y, w, h, options)
    this.body.friction = 0.4
    this.body.restitution = 0.8
    this.w = w
    this.h = h

    // this.add = function() {
    //   World.add(world, this.body)
    // }
    this.show = function() {
      let pos = this.body.position
      let angle = this.body.angle

      p5.push()
      p5.translate(pos.x, pos.y)
      p5.rotate(angle)
      p5.rectMode(p5.CENTER)
      p5.strokeWeight(1)
      p5.stroke(255)
      p5.fill(125)
      p5.rect(0, 0, this.w, this.h)
      p5.pop()
    }
  }
}
