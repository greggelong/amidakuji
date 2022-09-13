import random
import pprint




cols = 5
rows = 16
# grid is y by x grid[y][x]  #last row blank
grid = [
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0]
    ]



alice = 0
bob = 1
carol = 2
david = 3
ed = 4

def putHorizontals():
    for x in range(cols-1):
        for y in range(1,rows,2):
            #first col case
            if x == 0:
                r = random.randint(1,3)
                if r ==3:
                    grid[y][x]=1
                    grid[y][x+1]=1
            ## other col case

            elif grid[y][x]!=1 and grid[y][x-1] !=1:
                r = random.randint(1,2)
                if r ==2:
                    grid[y][x]=1
                    grid[y][x+1]=1


def findpath(person):
    y =0
    x =person
    while y< len(grid)-1:
        
        
        if grid[y][x]== 1:
            #check edges
            if x == 0:
                x=x+1
            elif x == 4:
                x=x-1
            ##check neighbors
            ### right neighbor
            elif grid[y][x+1]== 1:
                x=x+1
            # left neighbor
            elif grid[y][x-1]==1:
                x=x-1
            
        #increment
        y=y+1
        print(y,x)
    
    
    
    return x    

pp = pprint.PrettyPrinter(indent=4)

pp.pprint(grid)
putHorizontals()
print("*"*20)
pp.pprint(grid)

print("alice",findpath(alice))
print("bob", findpath(bob))
print("carol",findpath(carol))
print("david",findpath(david))
print("ed",findpath(ed))

