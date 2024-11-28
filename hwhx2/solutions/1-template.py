from machine import I2C, SoftI2C
from machine import UART
from machine import Pin


def recvuntil(c):
    data = ""
    while c not in data:
        data = uart.readline()
        if data is not None:
            print(data.decode(), end="")


uart = UART(1, baudrate=112500, tx=Pin(4), rx=Pin(5), timeout=1000, timeout_char=100)
i2c = I2C(0, scl=Pin(9), sda=Pin(8))

while not uart.any():
    pass

recvuntil(">")

uart.write(b"1\r\n")

# print(i2c.writeto(0x42, bytes([0x00, 0x00])))

while True:
    print(uart.readline())
