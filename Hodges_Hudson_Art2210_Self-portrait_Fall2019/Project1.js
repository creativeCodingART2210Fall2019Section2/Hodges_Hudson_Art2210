var var1={
  a:1
}

var var2={
  b:2
}

var var3={
  c:4
}

var var4={
  d:6
}

var var5={
  e:7
}

var var6={
  f:8
}
function setup(){
  createCanvas(windowWidth,windowHeight);
  background(178, 181, 14);
}

function draw(){
  Face();
  Hair();
  Body();
}

function Face(){
  strokeWeight(var1.a);
  fill(212, 191, 135);
  ellipse(800,425,400,500);
  beginShape();
  vertex(windowWidth/2,windowHeight/2);
  bezierVertex(900,450,1000,500,950,570);
  bezierVertex(950,570,915,545,910,515);
  endShape();
  strokeWeight(var2.b);
  beginShape();
  vertex(860,600);
  bezierVertex(880,580,885,575,884,580);
  endShape();
  strokeWeight(var2.b);
  fill(8, 15, 138);
  ellipse(760,380,80,100);
  ellipse(905,385,80,70);
  fill(0);
  ellipse(760,380,40,50);
  ellipse(905,385,40,35);
}

function Hair(){
  strokeWeight(var3.c);
  fill(110, 80, 29);
  triangle(800,160,825,280,875,180);
  triangle(835,180,860,330,900,190);
  triangle(720,180,740,360,810,170);
  quad(720,190,590,310,680,380,735,200);
  triangle(890,193,960,400,970,280);
}

function Body(){
  strokeWeight(var5.e);
  fill(190, 170, 115);
  quad(760,670,740,800,850,780,840,670);
  strokeWeight(var6.f);
  fill(0,220,100);
  ellipse(800,920,400,300);
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
  background(178, 181, 14);
}
