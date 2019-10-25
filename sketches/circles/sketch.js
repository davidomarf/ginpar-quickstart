/**
 * Standard function of p5js
 */
RANDOM_S = Math.random() * 1000000000

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
    let radius = randomGaussian(Number(CIRCLE_SIZE_AVG), Number(CIRCLE_SIZE_SD))
    stroke(random(255))
    fill(random(255))
    strokeWeight(random(radius/2))
    circle(random(width), random(height), radius)

  }
}