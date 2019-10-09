let circle;

function setup(){
  createCanvas(windowWidth,windowHeight);
  for (var i = 0; i<75; i++){
    var x = random(width);
    var y = random(height);
    var r = random(10, 69);
    fill(255,200,69,120);
    noStroke();
    ellipse(x, y, r*2, r*2)
  }
  circle = new Jitter();
}

function draw(){
  circle.move();
  circle.display();
}

class Jitter{
  constructor(){
    this.x = random(width);
    this.y = random(height);
    this.diamter = random(10,69);
    this.speed = 2;
  }

  move(){
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  display(){
    ellipse(this.x, this.y, this.diamter, this.diamter);
  }
}
