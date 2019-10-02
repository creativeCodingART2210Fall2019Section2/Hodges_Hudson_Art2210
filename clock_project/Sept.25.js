function setup(){
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);
}

function draw(){
  background(102,150,44);
  let sc = second();
  let mn = minute();
  let hr = hour();

  textSize(40);
  text('Seconds',323,220);
  strokeWeight(10);
  stroke(100,220,169);
  fill(220,100,169);
  let secondTime = map(sc, 0, 60, 0, 360);
  ellipse(400, 400, 280, 280, 0, secondTime);

  push();
  translate(400,400);
  rotate(-90);
  rotate(secondTime);
  stroke(100,220,169);
  line(0, 0, 110, 0);
  pop();

  textSize(40);
  text('Minutes',535, 645);
  strokeWeight(10);
  stroke(220,100,169);
  fill(169,150,200);
  let minuteTime = map(mn, 0, 60, 0, 360);
  ellipse(600, 780, 190, 190, 0, minuteTime);

  push();
  translate(600,780);
  rotate(-90);
  rotate(minuteTime);
  stroke(220,100,169);
  line(0, 0, 75, 0);
  pop();

  textSize(40);
  text('Hours', 746,290);
  strokeWeight(10);
  stroke(169,150,200);
  fill(100,220,169);
  let hourTime = map(hr % 12, 0, 12, 0, 360);
  ellipse(800, 400, 150, 150, 0, hourTime);

  push();
  translate(800,400);
  rotate(-90);
  rotate(hourTime);
  stroke(169,150,200);
  line(0, 0, 50, 0);
  pop();

}
function windowResized(){
  canvasResize(windowWidth,windowHeight);
}
