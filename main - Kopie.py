import machine
import hcsr04
import time
import uasyncio
import connectionwifi
import urequests
import json

from time import sleep
import random
# j' importe le module Pca9685
import pca9685
#j' importe la classe servos 
import servos

sda=Pin(21)
scl=Pin(22)
i2c=I2C(sda=sda ,scl=scl)
##je teste si c'est bien scanne 
print(i2c.scan())
je signaler 
pca=pca9685.Pca9685(i2c=i2c)

#je cree le premier servo
servo1V=servo.Servos(i2c=i2c) #servo vertical



# j' ai mis different trigger derriere le panneau
#exemple trig =13 echo=12



#### 


### je me  connecte a mon point acces
connectionwifi.connect("RasanaPanta","sylvieTchaa1971")

## j' entre mes credential solartracker
username="nomUilisateurde solar"
password="mot de passe solar"
data={"username":username ,"password":password}

### je definis le type de donnees je veu envoyer

requests_headers={
    'content_Type':'application/json'
}

## je fais une premiere tentative de connection pour obtenir le acces_token
request=urequests.post("https://solartracking.herokuapp.com/api/user/login/",json=data,headers=requests_headers)
user=request.json()
access_token=user['access_token']

## je modifie une dernier fois l ' entete pour donner le token access
requests_headers={'content-Type':'application/json' ,'Authorization':'Bearer'+ ' '+access_token}




async def ultrasonic(trig ,echo):
    hcsr04.HCSR04(trigger_pin=trig, echo_pin=echo, echo_timeout_us=1000000)
    await uasyncio.sleep_ms(1000)
    
rV=range(0,90)
async def servo_depla(pin):
    global setup
    while True :
        
        
        
#pin je met au 32
async def  buzzer_read(pin):
    buzzer = machine.PWM(machine.Pin(pin, machine.Pin.OUT))
    buzzer.freq(4186)
    buzzer.duty(0)
    await uasyncio.sleep_ms(2000)

while True:
    distance = ultrasonic.distance_cm()
    print('Distance:', distance, 'cm', '|', distance/2.54, 'inch')
    if distance <= 10:
        buzzer.duty(512)
        led.on()
    else:
        buzzer.duty(0)
        led.off()
    time.sleep_ms(1000)