def connect(ssid,password):
    import network
    station=network.WLAN(network.STA_IF)
    if station.isconnected()==True:
        print("already connected")
    station.active(True)
    station.connect(ssid,password)
    while station.isconnected()==False:
        pass
    print("connection reussi")
    print(station.ifconfig())
    