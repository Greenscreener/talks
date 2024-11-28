from machine import I2C, SoftI2C
from machine import UART
from machine import Pin

uart = UART(1, baudrate=112500, tx=Pin(4), rx=Pin(5), timeout=1000, timeout_char=100)
i2c = I2C(0, scl=Pin(9), sda=Pin(8))

while not uart.any():
    pass


def recvuntil(c):
    data = ""
    while c not in data:
        data = uart.readline()
        if data is not None:
            print(data.decode(), end="")


def getbytes():
    line = uart.readline()
    tosend = line.decode()
    tosend = tosend.split(" ")[:-1]
    ints = []
    for bruh in tosend:
        ints.append(int(bruh[2:], 16))

    print(line.decode())
    print(ints)
    print(tosend)
    bytestosend = bytes(ints)

    print(bytestosend)
    return bytestosend


recvuntil(">")

uart.write(b"1\r\n")


recvuntil(")")
bytestosend = getbytes()
print(i2c.writeto(0x42, bytestosend))

while True:
    recvuntil("!")
    bytestosend = getbytes()
    print(i2c.writeto(0x42, bytestosend))

recvuntil("ECSC")


