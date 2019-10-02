var img;

function preLoad(){
  img = loadImage("https://github.com/hhodge8/Hodges_Hudson_Art2210/raw/master/img_2/mui%20goku.png");
}

function setup(){
  createCanvas(windowWidth, windowHeight);
}

function draw(){
  image(img, windowWidth/2, windowHeight/2);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
