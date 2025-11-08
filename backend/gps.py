import serial
import pynmea2
import time

com_port = 'COM5'
set_baudrate = 9600

def fetch_loc(port, baudrate, timeout):
    global current_lat, current_lng

    with serial.Serial(port, baudrate, timeout = timeout) as ser:
        start = time.time()
        while True:
            line = ser.readline().decode('ascii', errors = 'replace').strip()
            if time.time() - start > 30:
                break
            if line.startswith(('$GPGGA', '$GPRMC')):
                try:
                    msg = pynmea2.parse(line)
                    if msg.latitude and msg.longitude:
                        current_lat = msg.latitude
                        current_lng = msg.longitude
                        break
                except pynmea2.ParseError:
                    continue

fetch_loc(com_port, set_baudrate, 1)
print(f"Current Location: {current_lat:.6f}, {current_lng:.6f}")