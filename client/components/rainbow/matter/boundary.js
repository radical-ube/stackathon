import Matter from 'matter-js'
const {Bodies} = Matter

export const boundaryConstructor = p5 => {
  return function Boundary(x, y, w, h) {
    const options = {
      friction: 0.4,
      restitution: 0.8,
      isStatic: true
    }
    this.body = Bodies.rectangle(x, y, w, h, options)

    this.show = function() {
      this.x = x
      this.y = y
      this.w = w
      this.h = h
      p5.push()
      p5.stroke(255)
      p5.fill(170)
      p5.rectMode(p5.CENTER)
      p5.rect(this.x, this.y, this.w, this.h)
      p5.pop()
    }
  }
}
