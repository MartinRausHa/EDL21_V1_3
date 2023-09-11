let Counter = 0
let Zahl_1 = 0
let Zahl_2 = 0
let Zahl_3 = 0
let Zahl_4 = 0
let Blink_1 = 1000
let Blink_2 = 4000
let Blink_3 = 300
let Warte_1 = 2000
let Warte_2 = 4000
basic.forever(function () {
    basic.showNumber(Counter)
    basic.clearScreen()
    // Startsequenz vorbereiten zur PIN Eingabe, 
    for (let index = 0; index < 2; index++) {
        basic.setLedColor(0xffffff)
        basic.pause(Blink_1)
        basic.turnRgbLedOff()
        basic.pause(Blink_2)
    }
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        `)
    for (let index = 0; index < Zahl_1; index++) {
        basic.setLedColor(0xffffff)
        basic.pause(Blink_3)
        basic.turnRgbLedOff()
        basic.pause(Blink_3)
    }
    basic.pause(Warte_1)
    Zahl_1 += 1
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . # . . .
        `)
    for (let index = 0; index < Zahl_2; index++) {
        basic.setLedColor(0xffffff)
        basic.pause(Blink_3)
        basic.turnRgbLedOff()
        basic.pause(Blink_3)
    }
    basic.pause(Warte_1)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        `)
    for (let index = 0; index < Zahl_3; index++) {
        basic.setLedColor(0xffffff)
        basic.pause(Blink_3)
        basic.turnRgbLedOff()
        basic.pause(Blink_3)
    }
    basic.pause(Warte_1)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . # .
        `)
    for (let index = 0; index < Zahl_4; index++) {
        basic.setLedColor(0xffffff)
        basic.pause(Blink_3)
        basic.turnRgbLedOff()
        basic.pause(Blink_3)
    }
    basic.pause(Warte_2)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # # # # .
        `)
    if (Zahl_1 == 9) {
        Zahl_1 = 0
        Zahl_2 += 1
    }
    if (Zahl_2 == 9) {
        Zahl_2 = 0
        Zahl_3 += 1
    }
    if (Zahl_3 == 9) {
        Zahl_3 = 0
        Zahl_4 += 1
    }
    if (Zahl_4 == 9) {
        // ENDE 9999
        Zahl_4 = 0
        basic.setLedColor(0xff0000)
        for (let index = 0; index < 100000000000; index++) {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
            basic.pause(500)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.pause(500)
        }
    }
    Counter += 1
})
