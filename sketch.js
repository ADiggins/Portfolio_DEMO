console.log("Testing sketch.js")

let myCanvas;

function setup() {
  myCanvas = createCanvas(500, 500);
  myCanvas.parent('gamePanel');
  background(220);
}

function draw() {
  ellipse(mouseX, mouseY, 20,20);

}

