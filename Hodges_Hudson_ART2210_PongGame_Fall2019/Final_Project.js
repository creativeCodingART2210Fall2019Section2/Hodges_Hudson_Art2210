var x=20;
var y=20;
var xSpeed=10;
var ySpeed=10;
var playerScore = 0;
var y2;

function setup() { 
createCanvas(500, 400);
reset();
}

function reset(){
  y2 = 0;
  playerScore = 0;
}

function mousePressed(){
  reset();
}

function draw() { 
background(150);
line(mouseX-30,height-50,mouseX+30,height-50);
x=x+xSpeed;
y=y+ySpeed;
scoreBoard(); 
ball(x,y);
fill(255);

if(x<20||x>width-20){
    xSpeed=-xSpeed;
  }
if(y<20||(x>mouseX-30 & x<mouseX+30 & y==height-70)){
    ySpeed=-ySpeed;
  }
if((x<=mouseX-30 & y<=height-50 & dist(x,y,mouseX-30,height-50) <=20)||(x>=mouseX+30 & y<=height-50 &
      dist(x,y,mouseX+30,height-50)<=20)){
      xSpeed=-xSpeed;
      ySpeed=-ySpeed;
    }

if(x>=mouseX-30 & x<=mouseX+30 & y<=height-50 & y>=height-70){
  playerScore = playerScore + 1;
}

if(y>=400){
    textSize(50);
    strokeWeight(0);
    stroke(0);
    fill(255,0,0);
    textAlign(CENTER);
    text("Game Over", 250, 200);
    textSize(25);
    text("Press 'R' to Restart", 250, 250);
    text("Click mouse to reset score", 250, 300);
  }

y2++;

}


function ball(x,y){
fill(0);
stroke(255);
strokeWeight(3);  
ellipse(x,y,40,40);
}

function scoreBoard(){
  strokeWeight(0);
  textSize(32);
  fill(255);
  textAlign(LEFT);
  text("Points: " + playerScore, 15, 40);
}

function keyPressed(){
x=random(20,width-20);
y=20;
xSpeed=10;
ySpeed=10;       
}