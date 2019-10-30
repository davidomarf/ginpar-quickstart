RANDOM_S = Math.random() * 1000000000;
NOISE_S = Math.random() * 1000000000;

/**
 * Standard function of p5js
 */
function setup() {
  createCanvas(DIMENSIONS[0], DIMENSIONS[1]).parent("artwork-container");

  randomSeed(RANDOM_S);
  noiseSeed(NOISE_S);
  // Call draw() only once
  // noLoop();
}
z = 0;
/**
 * Standard function of p5js
 */
function draw() {
  z++;
  // Set a background color
  colorMode(HSL);
  background(MAIN_HUE, 10, 90);
  strokeWeight(STROKE_WEIGHT);

  let CELL_SIZE = [width / MAZE_CELLS_W, height / MAZE_CELLS_H];

  let field = [];

  for (let i = 0; i < MAZE_CELLS_W; i++) {
    field.push([]);
    for (let j = 0; j < MAZE_CELLS_H; j++) {
      field[i].push(
        noise(i * NOISE_SCALE, j * NOISE_SCALE, z * CHANGE_SPEED * 0.5)
      );
    }
  }

  for (let i = 0; i < field.length; i++) {
    for (let j = 0; j < field[i].length; j++) {
      let h = field[i][j];
      if (
        random() > DRAWING_PROBABILITY ||
        h > Number(MAX_HEIGHT) ||
        h < Number(MIN_HEIGHT)
      ) {
        continue;
      }

      stroke(MAIN_HUE, 20, 20);
      let mazeLine = [
        (i + 1) * CELL_SIZE[0],
        j * CELL_SIZE[1],
        i * CELL_SIZE[0],
        (j + 1) * CELL_SIZE[1]
      ];
      if (random() > 0.5) {
        mazeLine = [
          i * CELL_SIZE[0],
          j * CELL_SIZE[1],
          (i + 1) * CELL_SIZE[0],
          (j + 1) * CELL_SIZE[1]
        ];
      }

      if (random() > 0.5) stroke(MAIN_HUE, 40, 50);

      line(mazeLine[0], mazeLine[1], mazeLine[2], mazeLine[3]);
    }
  }
}
