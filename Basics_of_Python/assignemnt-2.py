points = [(7, 2), (5,8), (10,4), (8, 9), (4,4)]

for (x,y) in points:
    
    if x > y:
        print(f'The X coordinate is greater than the Y coordinate for point {x, y}.')
    else:
        print(f'The Y coordinate is greater than or equal to the X coordinate for point {x, y}.')
