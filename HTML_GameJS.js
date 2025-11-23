console.log("Testing HTML_GameJS.js")

let myCanvas;
let ball;
let vel;

function setup() {
  myCanvas = createCanvas(500, 500);
  myCanvas.parent('gamePanel'); 
  ball = createVector(150,250);
  vel = createVector(random(-1,1), random(-0.7,0.7));
  vel.setMag(5);
  
  rectMode(CENTER);
}

function draw() {
  background(220);
  ball.add(vel);
  if (ball.x < 10 || ball.x > width-10) vel.x *= -1;
  if (ball.x > 475) noLoop();
  if (ball.y < 10 || ball.y > height-10) vel.y *= -1;
  if ( abs(ball.x-450) < 15/2+20/2 && abs(ball.y-mouseY) < 75/2+20/2) {
    // vel.reflect( createVector(-1,0) );
    vel.set( -1, 0);
    vel.rotate( radians(random(-60,60)) );
    vel.setMag(5);
  }

  ellipse(ball.x, ball.y, 20,20);

  rect(450, mouseY, 15,75);
}

