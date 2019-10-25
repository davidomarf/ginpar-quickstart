/**
 * Standard function of p5js
 */
RANDOM_S = Math.random()

function setup() {
  createCanvas(DIMENSIONS[0], DIMENSIONS[1]).parent("artwork-container");
  // Call draw() only once
  noLoop();
  smooth();
}

/**
 * Standard function of p5js
 */
function draw() {
  // Set a background color
  background(225);
  randomSeed(RANDOM_S)
  for(let i = 0; i < NUMBER_POINTS; i++){
    stroke(random(255))
    fill(random(255))
    strokeWeight(random(5))
    circle(random(width), random(height), random(20))
  }
}