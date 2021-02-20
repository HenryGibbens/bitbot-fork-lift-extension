function left () {
    bitbot.move(BBMotor.Left, BBDirection.Forward, 60)
}
function stop () {
    bitbot.setLedColor(0xFF0000)
    bitbot.stop(BBStopMode.Brake)
    basic.pause(1000)
    bitbot.ledClear()
}
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
function start () {
    bitbot.setLedColor(0x18E600)
    bitbot.go(BBDirection.Forward, 50)
}
radio.setGroup(123)
basic.forever(function () {
	
})
