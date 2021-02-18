function left () {
    bitbot.move(BBMotor.Left, BBDirection.Forward, 60)
}
function stop () {
    bitbot.setLedColor(0xFF0000)
    bitbot.stop(BBStopMode.Brake)
    basic.pause(1000)
    bitbot.ledClear()
}
input.onButtonPressed(Button.A, function () {
    radio.sendString("start")
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendString("Let")
})
function RIGHT () {
    bitbot.move(BBMotor.Right, BBDirection.Forward, 60)
}
radio.onReceivedString(function (receivedString) {
    bitbot.ledClear()
    if (receivedString == "start") {
        start()
    } else if (receivedString == "let") {
        left()
    } else if (receivedString == "right") {
        bitbot.setPixelColor(0, 0x659900)
        RIGHT()
    } else {
        if (receivedString == "stop") {
            stop()
        }
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("stop")
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendString("right")
})
function start () {
    bitbot.setLedColor(0x18E600)
    bitbot.go(BBDirection.Forward, 50)
}
radio.setGroup(123)
basic.forever(function () {
	
})
