from machine import UART
from machine import Pin
import time

uart = UART(1, tx=Pin(4), rx=Pin(5), timeout=0)

CPU_RST = Pin(0, Pin.OUT)
CPU_RST.off()
CPU_RST.on()


def recvuntil(c):
    data = ""
    while c not in data:
        read = uart.read()
        if read is None:
            continue
        data = read
        print(data.decode(), end="")


def write(buf):
    for c in buf:
        uart.write(c)
        time.sleep_us(100)


while not uart.any():
    pass



recvuntil(">")

uart.write(b"2\r\n")

recvuntil(":")




x = 0
for i in range(1000, 9999):
    if x > 8:
        CPU_RST.off()
        CPU_RST.on()
        while not uart.any():
            pass
        recvuntil(">")
        uart.write(b"2\r\n")
        recvuntil(":")
        x = 0
    x -=- 1
    msg = str(i) + "\r\n"
    write(msg)
    recvuntil(":")

recvuntil("ECSC")


