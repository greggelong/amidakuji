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
let alice = 0
let bob = 1
let carol =2
let david =3
let ed = 4;

let clrs;



function setup() {
  // put setup code here
  createCanvas(600,714)
  clrs = [color(255,0,0),color(255,255,0),color(255,0,255),color(0,0,255),color(0,255,0)]
  background(0)
  putHorizontals();
  console.table(grid)
  showGrid();
  frameRate(1)
   

}

function draw(){
    background(0);
    showGrid();
    let p = frameCount%5
    findpath(p,clrs[p])
    if (frameCount%10==0){
        resetGrid();
    }
}

function resetGrid(){
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

    putHorizontals();

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


function findpath(person, clr){
    let y =0
    let x =person
    let newx = person
    let newy = 0;
    stroke(clr)
    while (y< grid.length){
        
        
        if (grid[y][x]== 1){
            //check edges
            if (x == 0){
                newx=newx+1
                line(x*xsz,y*ysz,newx*xsz,newy*ysz);
                
            }
            else if(x == 4){
                newx=newx-1
                line(x*xsz,y*ysz,newx*xsz,newy*ysz);
            
            }
            //check neighbors
            //right neighbor
            else if (grid[y][x+1]== 1){
                newx=newx+1
                line(x*xsz,y*ysz,newx*xsz,newy*ysz);
            
            }
            //left neighbor
            else if (grid[y][x-1]==1){
                newx=newx-1
                line(x*xsz,y*ysz,newx*xsz,newy*ysz);
                
            }
             
        } 
         

        // increment 
        newy=newy+1
        // draw the line down
        line(newx*xsz,y*ysz,newx*xsz,newy*ysz); 
        


       
        // put newx y vals into x y
        x=newx;
        y=newy;
    }
    
    
    return x 
    
}