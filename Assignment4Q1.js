// Jake Kingdon
// Assignment 4 challange 1
// Due: March 27th, 2023.
// In this sketch, I used a loop to build three radially symmetric star shapes. The loop is inside a custom function that can pass
parameters that sets the color, number of sides of the shape, etc...

function setup() {
  createCanvas(400, 400);
  background(220);
  noStroke();
  // Defining each star shape with different parameters.
  let stars = [
    { x: 100, y: 100, scale: 50, points: 5, fillColor: color("red") },
    { x: 200, y: 200, scale: 75, points: 8, fillColor: color("yellow") },
    { x: 300, y: 300, scale: 100, points: 10, fillColor: color("blue") },
  ];
  // Drawing each star using the custom function with different parameters.
  for (let i = 0; i < stars.length; i++) {
    drawStar(
      stars[i].x,
      stars[i].y,
      stars[i].scale,
      stars[i].points,
      stars[i].fillColor
    );
  }
}

function drawStar(x, y, scale, points, fillColor) {
  push();
  translate(x, y);
  fill(fillColor);
  beginShape();
  for (let i = 0; i < points * 2; i++) {
    // loop through each point
    let angle = map(i, 0, points * 2, 0, TWO_PI);
    let radius = i % 2 === 0 ? scale : scale / 2;
    let xcoord = cos(angle) * radius;
    let ycoord = sin(angle) * radius;
    vertex(xcoord, ycoord);
  }
  endShape(CLOSE);
  pop();
}
