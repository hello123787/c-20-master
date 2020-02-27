
var r = 0;
var g = 50;
var b=255;

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){

  createCanvas(1200,400);
}


function draw(){
  
 r = map(mouseX,0,1200,250,200);
 g = map(mouseX,0,1200,20,250);
 b = map(mouseX,0,1200,0,250); 
 background(r,g,b);
 fill("white");
 ellipse(mouseX,200,10,10);


 }