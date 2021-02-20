function up_lift () {
    bitbot.bb360Servo(BBServos.P1, BBDirection.Forward, 50)
}
function stop () {
    bitbot.bbStopServos()
    bitbot.setLedColor(0xFF0000)
    bitbot.stop(BBStopMode.Brake)
    basic.pause(1000)
    bitbot.ledClear()
}
function down_lift () {
    bitbot.bb360Servo(BBServos.P1, BBDirection.Reverse, 50)
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
    } else if (receivedString == "forklift down") {
        bitbot.setPixelColor(9, 0xFF8000)
    } else if (receivedString == "forklift up") {
        bitbot.setPixelColor(5, 0xD82600)
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
