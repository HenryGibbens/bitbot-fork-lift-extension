function stop () {
    bitbot.setLedColor(0xFF0000)
    bitbot.stop(BBStopMode.Brake)
    basic.pause(1000)
    bitbot.ledClear()
}
function RIGHT () {
    bitbot.driveTurnMilliseconds(BBRobotDirection.Right, 20, 400)
}
function _let () {
    bitbot.driveTurnMilliseconds(BBRobotDirection.Left, 20, 400)
}
radio.onReceivedString(function (receivedString) {
    bitbot.ledClear()
    if (receivedString == "start") {
        bitbot.setPixelColor(11, 0x8000FF)
    } else if (receivedString == "let") {
        bitbot.setPixelColor(10, 0x0080FF)
    } else if (receivedString == "right") {
        bitbot.setPixelColor(7, 0xB09EFF)
    } else if (receivedString == "up") {
        bitbot.setPixelColor(2, 0xFF0000)
    } else if (receivedString == "down") {
        bitbot.setPixelColor(3, 0x18E600)
    } else {
        if (receivedString == "stop") {
            bitbot.setPixelColor(8, 0x0000FF)
        }
    }
})
function start () {
    bitbot.setLedColor(0x18E600)
    bitbot.go(BBDirection.Forward, 20)
}
radio.setGroup(123)
basic.forever(function () {
	
})
