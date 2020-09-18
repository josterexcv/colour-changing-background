
var r = 0;
var g = 50;
var b = 255;

function setup(){

  createCanvas(1200,400);
}


function draw(){
r = map (mouseX,20,200,0,30);
g = map (mouseX,0,20,30,200);
b = map (mouseX,30,0,200,20);

background = (r,g,b);
fill (255);
ellipse(mouseX,100,50,50);
}