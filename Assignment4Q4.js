// Jake Kingdon
// Assignment 4 challange 4
// Due: April 7th, 2023.
// In this sketch, I created a sketch that displays a pattern of sprites on the screen that represent the different gradients of the color red, in a set 
// order. Also, the sprites appear all at once as a static image.

function setup() {
  createCanvas(400, 400);
  noStroke();
  colorMode(RGB, 255, 255, 255, 1);
}

// Set parameters to draw the 6 columns of ellipses.
function draw() {
  background(75);
  translate(-0, -10);
  scale(2);
  let rows = 6;
  let radius = 20;
  let spacing = 30;
  let startX = 30;
  let startY = 30;
  let colorStep = 255 / (rows - 1);

  // Add spacing and gradient for the columns.
  for (let i = 0; i < rows; i++) {
    let redValue = i * colorStep;
    fill(redValue, 0, 0);
    for (let j = 0; j < width / spacing; j++) {
      ellipse(startX + j * spacing, startY + i * spacing, radius, radius);
    }
  }
}
