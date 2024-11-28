from machine import Pin
import time


FPGA_CLOCK  = Pin(8, Pin.OUT)  # noqa: E221
FPGA_RST    = Pin(9, Pin.OUT)  # noqa: E221

FPGA_I0     = Pin(0, Pin.OUT)  # noqa: E221
FPGA_I1     = Pin(1, Pin.OUT)  # noqa: E221
FPGA_I2     = Pin(2, Pin.OUT)  # noqa: E221
FPGA_I3     = Pin(3, Pin.OUT)  # noqa: E221
FPGA_O0     = Pin(4, Pin.IN)  # noqa: E221
FPGA_O1     = Pin(5, Pin.IN)  # noqa: E221
FPGA_O2     = Pin(6, Pin.IN)  # noqa: E221
FPGA_O3     = Pin(7, Pin.IN)  # noqa: E221


LED0        = Pin(10, Pin.OUT)  # noqa: E221
LED1        = Pin(11, Pin.OUT)  # noqa: E221

outs = [FPGA_I0, FPGA_I1, FPGA_I2, FPGA_I3]
ins = [FPGA_O0, FPGA_O1, FPGA_O2, FPGA_O3]


def get_state() -> list[int]:
    return [ins[i].value() for i in range(len(ins))]


def clock():
    FPGA_CLOCK.on()
    FPGA_CLOCK.off()


def state_change(inp: list[int]) -> list[int]:
    for i in range(len(outs)):
        outs[i].value(inp[i])
    clock()
    return get_state()


def intToBin(i: int) -> list[int]:
    return [(i >> x) & 1 for x in range(4)][::-1]


def attempt(prefix: list[int]) -> list[int]:
    FPGA_CLOCK.off()
    FPGA_RST.on()
    clock()
    FPGA_RST.off()
    for state in prefix:
        state_change(intToBin(state))
    return get_state()


def dfs(prefix: list[int], prevresult: list[int]):
    result = attempt(prefix)
    print(prefix, result)
    if prevresult == result:
        return
    for i in range(16):
        full = prefix.copy()
        full.append(i)
        dfs(full, result)


state_change([0, 0, 0, 0])

dfs([], intToBin(0b1010))
