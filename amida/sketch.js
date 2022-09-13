let grid = [
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

let rows =17
let cols =5



function setup() {
  // put setup code here
  createCanvas(600,600)
  background(0)
  putHorizontals();
  console.table(grid)
}

function draw() {
  // put drawing code here
  fill(255)
  ellipse(mouseX,mouseY,100)
}


function putHorizontals(){
    for(let x= 0;x<cols-1;x++){
        for(let y=1;y<rows-1;y+=2){
            //first col case
            if (x == 0){
                r = floor(random(1,3) ) 
                if (r ==2){
                    grid[y][x]=1
                    grid[y][x+1]=1
                }
            }
            //other col case

            else if(grid[y][x]!=1 && grid[y][x-1] !=1){
                r = floor(random(1,3))
                if(r ==2){
                    grid[y][x]=1
                    grid[y][x+1]=1
                }
            }
        }
    }
}