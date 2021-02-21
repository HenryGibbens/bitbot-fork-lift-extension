function up_lift () {
    bitbot.bb360Servo(BBServos.P1, BBDirection.Forward, 20)
    basic.pause(1000)
    bitbot.bb360Servo(BBServos.P1, BBDirection.Forward, 0)
}
function back () {
    bitbot.setLedColor(0x18E600)
    bitbot.go(BBDirection.Reverse, 50)
}
function fast () {
    bitbot.setLedColor(0x0080FF)
    bitbot.goms(BBDirection.Forward, 40, 2000)
}
function stop () {
    bitbot.bbStopServos()
    bitbot.setLedColor(0xFF0000)
    bitbot.stop(BBStopMode.Brake)
    basic.pause(1000)
    bitbot.ledClear()
}
function lift_stop () {
    bitbot.bb360Servo(BBServos.P1, BBDirection.Forward, 0)
}
function RIGHT () {
    bitbot.driveTurnMilliseconds(BBRobotDirection.Right, 512, 1000)
}
function _let () {
    bitbot.driveTurnMilliseconds(BBRobotDirection.Left, 300, 500)
}
radio.onReceivedString(function (receivedString) {
    bitbot.ledClear()
    if (receivedString == "start") {
        bitbot.setPixelColor(11, 0x8000FF)
        start()
    } else if (receivedString == "let") {
        bitbot.setPixelColor(10, 0x0080FF)
        _let()
    } else if (receivedString == "right") {
        bitbot.setPixelColor(7, 0xB09EFF)
        RIGHT()
    } else if (receivedString == "forklift up") {
        up_lift()
        bitbot.setPixelColor(9, 0xFF8000)
    } else if (receivedString == "stop") {
        bitbot.setPixelColor(8, 0x0000FF)
        stop()
    } else if (receivedString == "back") {
        bitbot.setPixelColor(4, 0xFF0000)
        back()
    } else if (receivedString == "forklift stop") {
        bitbot.setPixelColor(3, 0xFF0000)
        lift_stop()
    } else if (receivedString == "fast") {
        fast()
    } else {
    	
    }
})
function start () {
    bitbot.setLedColor(0x18E600)
    bitbot.goms(BBDirection.Forward, 20, 2000)
}
radio.setGroup(123)
bitbot.select_model(BBModel.XL)
bitbot.bbServoDeadband(5)
basic.forever(function () {
	
})
