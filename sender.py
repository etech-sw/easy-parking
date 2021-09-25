import network, urequests
#from urllib.parse import urlencode
from parse import urlencode # uncomment the above line and comment out this one if the code above worked in the REPL

parameters = {
    "q":"Minneapolis",
    "appid":"abcdefghijklmnop1234567891234567",
    "units":"imperial"
}

username="nomUilisateurde solar"
password="mot de passe solar"
data={"username":username ,"password":password}

access_token="" 

def connect_to_wifi(wlan, ssid, password):
    if not wlan.isconnected():
        print("Connecting to network...")
        wlan.connect(ssid, password)
        while not wlan.isconnected():
            pass
        print("Connected to network")
    else:
        print("Connection already established")

def get_access_token(url, params=None):
    request_header={'content_Type':'application/json'}
    request_url = "https://solartracking.herokuapp.com/api/user/login/"
    request_token = urequests.post(request_url, json=data, headers=request_header)
    token = request_token.json()
    return token['access_token']

def get(url, params=None):
    headers={'content-Type':'application/json' ,'Authorization':'Bearer'+ ' ' + access_token}
    if params:
        url = url.rstrip('?') + '?' + urlencode(params, doseq=True)
        print("url with parameters: " + url)
    return urequests.get(url, headers=headers)

# Push sensor data to iot platform
# data:  sensor information
#           ps_1: parking slot 1
#           ps_2: parking slot 2
#           ps_3: parking slot 3
#           vehicle_detected: vehicle detection at entrance
#           door: parking entrance status
def push_sensor_data(url, data):
    request_header={'content-Type':'application/json' ,'Authorization':'Bearer'+ ' ' + access_token}
    request_url = "https://solartracking.herokuapp.com/api/user/login/"
    res = urequests.post(request_url, json=data, headers=request_header).json()
    print(res)

# connect to wifi
wlan = network.WLAN(network.STA_IF)
wlan.active(True)

connect_to_wifi(wlan, "ssid", "password")

# init request token to communicate with the backend
access_token=get_access_token()

response = get('https://api.openweathermap.org/data/2.5/weather', parameters)
print(response.text)
weather_data = response.json()