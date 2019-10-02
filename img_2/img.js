var img;

function preLoad(){
  img = loadImage("C:\Users\hudso\OneDrive\Desktop\Class2210\img_practice\mui goku.png");
}

function setup(){
  createCanvas(windowWidth, windowHeight);
}

function draw(){
  image(img, windowWidth/2-345, windowHeight/2-194);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
