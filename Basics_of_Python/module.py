import calculator as cal

print(cal.add(8,9))

print(cal.div(5, 2))

print(cal.mul(2, 9))

print(cal.rem(1, 2))

# Import only a specific method
from calculator import add
print(add(8,1))