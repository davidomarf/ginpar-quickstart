/* You don't need to initialize your variables in here. However, if you decide
 * to do it, you **must** use `var` instead of `let` or `const`.
 */

RANDOM_S = Math.random() * 1000000000


/**
 * Standard function of p5js
 */
function setup() {
  createCanvas(DIMENSIONS[0], DIMENSIONS[1]).parent("artwork-container");

  // Call draw() only once
  noLoop();
}

/**
 * Standard function of p5js
 */
function draw() {
  // Set a background color
  background(225);
  stroke(120)

  randomSeed(RANDOM_S)

  let CELL_SIZE = [
    (width / MAZE_CELLS_W),
    (height / MAZE_CELLS_H)
  ]

  for(let i = 0; i < MAZE_CELLS_W; i++){
    for(let j = 0; j < MAZE_CELLS_H; j++){
      let mazeLine = [
        (i+1) * CELL_SIZE[0], j * CELL_SIZE[1],
        (i) * CELL_SIZE[0], (j+1) * CELL_SIZE[1]
      ]
      if (random() > 0.5){
        mazeLine = [
          i * CELL_SIZE[0], j * CELL_SIZE[1],
          (i+1) * CELL_SIZE[0], (j+1) * CELL_SIZE[1]
        ]
      }

      strokeWeight(STROKE_WEIGHT * ((10 + j) / MAZE_CELLS_H))

      line(mazeLine[0], mazeLine[1], mazeLine[2], mazeLine[3])
    }
  }
}