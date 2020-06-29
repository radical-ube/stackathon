import React, {useState, useEffect} from 'react'
import p5 from 'p5'
import {connect} from 'react-redux'

const Scene = props => {
  const [myRef, setMyRef] = useState(React.createRef())

  const Sketch = p5 => {
    let width = window.innerWidth
    let height = window.innerHeight * 0.8
    let string = ''

    const strings = []
    p5.setup = () => {
      p5.createCanvas(width, height)
    }
    p5.draw = () => {
      p5.background(50, 150)
      p5.fill(255)
      p5.textSize(32)
      p5.text('What makes you proud?', width / 2 - 150, height * 0.9)
      p5.text(string, width / 2 - 100, height / 2 - 50)

      if (strings.length) {
        p5.text('', 0, 0)
        for (let i = 0; i < strings.length; i++) {
          let time = p5.millis()
          p5.text(
            strings[i],
            p5.mouseX + p5.sin(time / 500) * 20 + i * 32,
            p5.mouseY + p5.cos(time / 300) * 20 + (i + 1) * 32
          )
        }
      }
    }
    p5.keyPressed = () => {
      if (p5.keyCode === p5.ENTER) {
        strings.push(string)
        string = ''
      }
      if (p5.keyCode === p5.BACKSPACE) {
        string = string.substring(0, string.length - 1)
      }
    }
    p5.keyTyped = () => {
      string += p5.key
      console.log(string)
    }
  }

  useEffect(() => {
    const myP5 = new p5(Sketch, myRef.current)
  }, [])

  return <div ref={myRef} />
}

export default connect(null)(Scene)