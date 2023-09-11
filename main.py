Zähler = 0
Zahl_1 = 0
Zahl_2 = 0
Zahl_3 = 0
Zahl_4 = 0
Blink_1 = 1000
Blink_2 = 4000
Blink_3 = 300
Warte_1 = 1000
Warte_2 = 3000

def on_forever():
    global Zähler, Zahl_1, Zahl_2, Zahl_3, Zahl_4
    basic.show_number(Zähler)
    Zähler += 1
    basic.clear_screen()
    # Startsequenz vorbereiten zur PIN Eingabe, 
    for index in range(2):
        basic.set_led_color(0xffffff)
        basic.pause(Blink_1)
        basic.turn_rgb_led_off()
        basic.pause(Blink_2)
    basic.show_leds("""
        . . . . .
                . . . . .
                . . . . .
                . . . . .
                # . . . .
    """)
    for index2 in range(Zahl_1):
        basic.set_led_color(0xffffff)
        basic.pause(Blink_3)
        basic.turn_rgb_led_off()
    basic.pause(Warte_1)
    Zahl_1 += 1
    basic.show_leds("""
        . . . . .
                . . . . .
                . . . . .
                . . . . .
                . # . . .
    """)
    for index3 in range(Zahl_2):
        basic.set_led_color(0xffffff)
        basic.pause(Blink_3)
        basic.turn_rgb_led_off()
    basic.pause(Warte_1)
    basic.show_leds("""
        . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . # . .
    """)
    for index4 in range(Zahl_3):
        basic.set_led_color(0xffffff)
        basic.pause(Blink_3)
        basic.turn_rgb_led_off()
    basic.pause(Warte_1)
    basic.show_leds("""
        . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . # .
    """)
    for index5 in range(Zahl_4):
        basic.set_led_color(0xffffff)
        basic.pause(Blink_3)
        basic.turn_rgb_led_off()
    basic.pause(Warte_2)
    basic.show_leds("""
        . . . . .
                . . . . .
                . . . . .
                . . . . .
                # # # # .
    """)
    if Zahl_1 == 9:
        Zahl_1 = 0
        Zahl_2 += 1
    if Zahl_2 == 9:
        Zahl_2 = 0
        Zahl_3 += 1
    if Zahl_3 == 9:
        Zahl_3 = 0
        Zahl_4 += 1
    if Zahl_4 == 9:
        # ENDE 9999
        Zahl_4 = 0
        basic.set_led_color(0xff0000)
        for index6 in range(100000000000):
            basic.show_leds("""
                # # # # #
                                # # # # #
                                # # # # #
                                # # # # #
                                # # # # #
            """)
            basic.pause(500)
            basic.show_leds("""
                . . . . .
                                . . . . .
                                . . . . .
                                . . . . .
                                . . . . .
            """)
            basic.pause(500)
    Zähler += 1
basic.forever(on_forever)
