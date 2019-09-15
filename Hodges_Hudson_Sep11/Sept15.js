function setup(){
  createCanvas(windowWidth,windowHeight);
  background(134,101,69);


}

function draw(){
  Ellipse();
  whileLoop();
  forLoop();
  fL2();
  fL3();
}

function Ellipse(){
  fill(0,150,0);
  ellipse (0, 200, 30, 30);
  ellipse (50, 200, 30, 30);
  ellipse (100, 200, 30, 30);
  ellipse (150, 200, 30, 30);
  ellipse (200, 200, 30, 30);
}

function whileLoop(){
  fill(255,133,220);
  var x=0;
  while (x <= width){
  ellipse(x, 400,25,25);
  x = x + 50;
  }
}

function forLoop(){
  for (var x = 0; x <= height; x+=50){
    fill(0,0,188);
    ellipse(x, 600, 30, 30);
  }
}

function fL2(){
  fill(200,100,69);
  for(var x = 800; x <= 1500; x+=50){
      for(var y = 100; y <= 300; y+=50){
      ellipse(x, y, 30, 30);
      }
}
}

function fL3(){
  fill(mouseX,mouseY,255,255,255);
  for(var x = 800; x <= 1000; x+=50){
      for(var y = 700; y <= 900; y+=50){
      ellipse(x, y, 30, 30);
      }
}
}
function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}
