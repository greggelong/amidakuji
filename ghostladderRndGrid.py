
# grid is y by x grid[y][x]  #last row blank
grid = [
    [0,0,1,1,0],
    [1,1,0,0,0],
    [0,0,1,1,0],
    [1,1,0,0,0],
    [0,0,0,1,1],
    [1,1,0,0,0],
    [0,0,0,0,0],
    
    ]



alice = 0
bob = 1
carol = 2
david = 3
ed = 4



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


print("alice",findpath(alice))
print("bob", findpath(bob))
print("carol",findpath(carol))
print("david",findpath(david))
print("ed",findpath(ed))