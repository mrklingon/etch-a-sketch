input.onButtonPressed(Button.A, function () {
    turtle.forward(1)
})
input.onButtonPressed(Button.AB, function () {
    if (Pen_state == 0) {
        Pen_state = 1
        turtle.pen(TurtlePenMode.Down)
    } else {
        Pen_state = 0
        turtle.pen(TurtlePenMode.Up)
    }
})
input.onButtonPressed(Button.B, function () {
    turtle.turnRight()
})
input.onGesture(Gesture.Shake, function () {
    images.createImage(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `).showImage(0)
})
let Pen_state = 0
turtle.setPosition(2, 2)
Pen_state = 0
