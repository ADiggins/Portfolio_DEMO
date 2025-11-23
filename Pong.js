console.log("Testing Pong.js");

var myCanvas;
var ball, vel;

function setup() {
    myCanvas = createCanvas(500,500);
    myCanvas.parent('gamePanel');
    ball = createVector(150,250);
    vel = createVector(-1,0);
    vel.rotate( random(-30,30) );
    vel.setMag(5);
    // pause();
}

function draw() {
    background(100,50,50);
    
    ball.add(vel);
    if (ball.x < 10) vel.reflect( createVector(1,0) );
    if (ball.x > 490) noLoop();
    if (ball.y < 10) vel.reflect( createVector(0,1) );
    if (ball.y > 490) vel.reflect( createVector(0,-1) );

    fill(200,50,100);
    noStroke();
    ellipse(ball.x, ball.y, 20,20);

    //if the distance between the ball and the paddle is
    //  < half size of Paddle PLUS half size of Ball
    if (abs(ball.x-450) < 15/2+20/2 && abs(ball.y-mouseY) < 75/2+20/2) {
        vel.set(-1,0);
        vel.rotate( radians(random(-60,60)));
        vel.setMag(5);
    }

    fill(100,50,200);
    rectMode(CENTER);
    rect(450, mouseY, 15, 75);
}