#importation de dependances

from hcsr04 import HCSR04
from machine import Pin, I2C
import time
import utils
import servo
import uasyncio

###   Définition des variables globales   ###

# définition des sensor
sensor1 = HCSR04(trigger_pin = utils.trigger_pin_sensor1, echo_pin = utils.echo_pin_sensor1, echo_timeout_us = 1000000) #sensor 1
sensor2 = HCSR04(trigger_pin = utils.trigger_pin_sensor2, echo_pin = utils.echo_pin_sensor2, echo_timeout_us = 1000000) #sensor 2
sensor3 = HCSR04(trigger_pin = utils.trigger_pin_sensor3, echo_pin = utils.echo_pin_sensor3, echo_timeout_us = 1000000) #sensor 3

# etat des sensor, 0 pour place vide et 1 pour place occupée
state_sensor1 = 0 
state_sensor2 = 0
state_sensor3 = 0

# servo moteur
sda=Pin(21)
scl=Pin(22)
i2c=I2C(sda=sda ,scl=scl)
servo_motor=servo.Servos(i2c=i2c)

# Buzzer
buzzer = Pin(utils.buzzer_pin, Pin.OUT)

maxPlace = 3 # nombre de place du parking
freePlace = 3 # nombre de place disponible au depart

direction = 2 # direction de la voiture, 1 pour voiture entrante, 0 pour voiture sortante et 2 pour aucune

###     Définition des fonctions      ###

# Pour ouvrir la barriere
def ouvrir():
    servo.duty(70)

# Pour fermer la barriere
def fermer():
    servo.duty(130)

# Pour émettre un son avec le buzzer en cas de probleme
def warning_sound():
    buzzer.value(1)
    time.sleep_ms(1000)
    buzzer.value(0)
    time.sleep_ms(1000)
    buzzer.value(1)
    time.sleep_ms(1000)
    buzzer.value(0)

# Pour émettre un son avec le buzzer de success
def success_sound():
    buzzer.value(1)
    time.sleep_ms(1000)
    buzzer.value(0)

# Pour ecouter un sensor
async def listenSensor(sensor, state, name):
    old_state = state
    while True:
        distance = sensor.distance_cm()
        print(name + " " + distance,' cm')
        if (distance < 6 and distance > 0): # si une voiture est détectée
            if old_state == 0: # si la place en question etait vide
                old_state = 1
                if direction == 1: # Si la direction est entrante
                    direction = 2
                    freePlace = freePlace - 1
                    fermer() # fermer le parking
                    success_sound()
                    # TODO: logic pour dire au backend qu'une place a été occuoée
        else: # si aucune voiture n'est détectée
            if old_state == 1: # si la place en question etait aucupée
                old_state = 0
                ouvrir() # ouvrir le parking pour que la voiture sorte
                success_sound()
        time.sleep_ms(100)

# Fonction exécutée lorsqu'une voiture est détectée
def listenCapteur(pin):
    print("Car detected")
    global direction
    global freePlace
    global maxPlace
    if direction == 0: # si la direction est sortante
        direction = 2
        freePlace = freePlace + 1
        fermer() # Fermer le parking
        # TODO: logic pour dire au backend qu'une place a étée libérée
    else:
        if freePlace < maxPlace: # Si il y a au moins une place libre
            ouvrir()
            direction = 1
        else: # Si pas de place libre
            warning_sound()

# Initialisation du capteur de presence a l'entrée
pin_capteur = Pin(utils.pin_capteur, Pin.IN)
pin_capteur.irq(trigger = Pin.IRQ_RISING, handler = listenCapteur) # listenCapteur sera appellé a chaque foid qu'une voiture sera détectée

# Initialisation des sensor
event_loop = uasyncio.get_event_loop()

event_loop.create_task(listenSensor(sensor1, state_sensor1, "parking slot 1"))
event_loop.create_task(listenSensor(sensor2, state_sensor2, "parking slot 2"))
event_loop.create_task(listenSensor(sensor3, state_sensor3, "parking slot 3"))
event_loop.run_forever()

while True:
    if freePlace < 3:
        print("free place: ", freePlace)


