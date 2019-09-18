var x = 0;
var y = 0;
var px = 0;
var py = 0;
var easing = 0.01;

function setup(){
  createCanvas(windowWidth,windowHeight);
  stroke(0,150);
}

function draw(){
  var targetX = mouseY;
  x +=(targetX-x)*easing;
  var targetY = mouseX;
  y +=(targetY-y)*easing;
  var weight = dist(y,x,px,py);
  strokeWeight(weight);
  line(x,y,px,py);
  py = x;
  px = y;
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}
