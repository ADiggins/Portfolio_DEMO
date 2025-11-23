console.log("Testing Pacman.js");

var myCanvas;

function setup() {
    myCanvas = createCanvas(500,500);
    myCanvas.parent('gamePanel');
    // pause();
}

function draw() {
    background(255,0,0);
    ellipse(mouseX,mouseY,20,20);
}