// Jake Kingdon
// Assignment 4 challange 2
// Due: March 29th, 2023.
// In this sketch, I create a repeat combination of paintdrop shapes horizontally and vertically to create a two-dimensional 
// pattern. Instead of using a star, I decided to create a paintdrop pattern instead. Hopefully that won't be a problem. 
// If it is, I can change it for the future.

function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background("black");
  drawPaintdropPattern();
}

// Define the star size and spacing.
function drawPaintdropPattern() {
  const paintdropSize = 10;
  const spacing = 50;

  // Create a horizontal and vertical direction loop.
  for (let x = 0; x < width; x += spacing) {
    for (let y = 0; y < height; y += spacing) {
      // Draw the red stars.
      fill("red");
      drawPaintdropShape(x, y, paintdropSize);

      // Draw the yellow stars.
      fill("yellow");
      drawPaintdropShape(x + spacing / 2, y + spacing / 2, paintdropSize);

      // Draw the blue stars.
      fill("blue");
      drawPaintdropShape(x, y + spacing, paintdropSize);
    }
  }
}

// Create the paintdrop shapes.
function drawPaintdropShape(x, y, size) {
  beginShape();
  vertex(x, y - size / 2);
  vertex(x + size / 5, y - size / 6);
  vertex(x + size / 5, y);
  vertex(x + size / 20, y + size / 6);
  vertex(x, y + size / 7);
  vertex(x - size / 10, y + size / 6);
  vertex(x - size / 5, y);
  vertex(x - size / 15, y - size / 6);
  endShape(CLOSE);
}
