from machine import UART
from machine import Pin
import time
import rp2

uart = UART(1, tx=Pin(4), rx=Pin(5), timeout=100)

CPU_RST = Pin(0, Pin.OUT)
CPU_RST.off()
CPU_RST.on()

LEVER = Pin(1, Pin.OUT)
LEVER.off()

while not uart.any():
    pass


def recvuntil(c):
    data = ""
    while c not in data:
        read = uart.readline()
        if read is None:
            continue
        data = read
        # print(data.decode(), end="")
        print(data)


def write(buf):
    for c in buf:
        uart.write(c)
        time.sleep_us(100)


recvuntil(">")

write("3\r\n")

recvuntil("START ROULETTE")

print("aaaaaaaaaa")

NUM_CYLINDERS = 3
CYLINDER_SIZE = 256

cylinders = [[], [], []]

for cylinder in range(NUM_CYLINDERS):
    for _ in range(CYLINDER_SIZE):
        cylinders[cylinder].append(int(uart.readline()))


print(cylinders)
print([(min(c), max(c)) for c in cylinders])
positions200 = [c.index(200) for c in cylinders]
print(positions200)
positions = [
    [c.index(i) if i in c else -1 for c in cylinders]
    for i in range(64, 257)
]
positions = [p for p in positions if -1 not in p]
print(positions200)

@rp2.asm_pio(set_init=rp2.PIO.OUT_LOW)
def pull_fast():
    wrap_target()
    pull(block)
    out(x, 32)
    set(pins, 1)                [10]
    set(pins, 0)                [10]
    label("d1")
    nop()                       [20]
    jmp(x_dec, "d1")
    nop()                       [20]
    wrap()

sm = rp2.StateMachine(0, pull_fast, freq=1_000_000, set_base=Pin(1))

sm.put(positions200[0])
sm.put(positions200[1])
sm.put(positions200[2])
sm.put(positions200[2])

sm.active(1)

recvuntil("RESULT")

results = [int(uart.readline()) for _ in range(NUM_CYLINDERS)]
print(results)
resultpositions = [cylinders[i].index(results[i]) if results[i] != 0 else -1 for i in range(NUM_CYLINDERS)]
print(resultpositions)
