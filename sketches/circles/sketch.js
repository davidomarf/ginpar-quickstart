/** sketches/circles/sketch.js
 * 
 * This is an example of how a Ginpar sketch works.
 */

/**
 * You can declare your variables inside your script, if you need it for
 * your IDE to stop complaining, or help you autocomplete variable names.
 * 
 * However, you **don't need to**. Ginpar will read the content of ./data.yaml
 * and create the value fetcher for those parameters.
 * 
 * In `data.yaml` I've declared DIMENSIONS, NUMBER_POINTS, CIRCLE_SIZE_AVG,
 * and CIRCLE_SIZE_SD.
 */

/**
 * If you decide to do it, make sure to declare them with `var`. 
 * Don't use `let` or `const`.
 */

/**
 * Standard function of p5js
 */
function setup() {
  /**
   * You need to specify the parent of the canvas element to be the same div element
   * that will contain the canvas.
   * 
   * For gart, the default Ginpar theme, this element is #artwork-container.
   */
  createCanvas(DIMENSIONS[0], DIMENSIONS[1]).parent("artwork-container");

  // Draw a static image using noLoop
  noLoop();
}

/**
 * Standard function of p5js.
 * This doesn't suffer from much modification.
 */
function draw() {
  // Set a background color
  background(225);
  randomSeed(RANDOM_SEED)

  /**
   * Ginpar implements a function ginpar.seed() that updates the seeds for the
   * random and noise values generators of p5. 
   * 
   * This function only gets called when you click the `New Seeds` button in the 
   * sketch page, so every sketch that uses the P5.js random functions will generate
   * the same result unless you set new seeds inside draw or setup deliberitaly,
   * purposefully.
   */

  for(let i = 0; i < NUMBER_POINTS; i++){
    // Obtain a radius value using the size average and standard deviation
    let radius = randomGaussian(Number(CIRCLE_SIZE_AVG), Number(CIRCLE_SIZE_SD))

    // Obtain a random gray color for the stroke and fill
    stroke(random(255))
    fill(random(255))

    // Obtain a random stroke weight of half the size of the radius
    strokeWeight(random(radius/2))

    // Draw a circle in a random position
    circle(random(width), random(height), radius)
  }
}
