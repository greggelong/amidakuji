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
let xsz =120
let ysz = 42;


function setup() {
  // put setup code here
  createCanvas(600,714)
  background(0)
  putHorizontals();
  console.table(grid)
  showGrid();
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

function showGrid(){
  translate(60,0);
  stroke(255)
  strokeWeight(10);
  for(let l=0; l<5*120;l+=120){
    line(l,0,l,height)
  }

  
  for(let j =0;j<grid.length;j++){
    for(let i =0;i<cols-1;i++){
      if(grid[j][i]==1 && grid[j][i+1]==1){
        line(i*xsz,j*ysz,i*xsz+xsz,j*ysz)
      }

    }
  }
}


