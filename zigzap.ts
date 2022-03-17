//Exercise 3
console.log("Exercise Three ==> Zig Zag!");

const sample: number[][] = [
  [1, 3, 4, 10],
  [2, 5, 9, 11],
  [6, 8, 12, 15],
  [7, 13, 14, 16],
];

const ZigZagTraverse = (matrix: number[][]): number[] => {
  // Matrix parameters
  const height = matrix.length - 1;
  const width = matrix[0].length - 1;

  // Direction variables initialization
  let i = 0;
  let j = 0;
  let goingDown = true;

  const matrixResult = [];

  while (!isOutOfBounds(i, j, height, width)) {
    matrixResult.push(matrix[i][j]);

    // VERTICAL MOVEMENT
    if (goingDown) {
      // Check initial position OR is at the bottom border
      if (j === 0 || i === height) {
        goingDown = false;

        if (i === height) {
          j += 1;
        } else {
          i += 1;
        }
      } else {
        i += 1;
        j -= 1;
      }
      // HORIZONTAL MOVEMENT
    } else {
      // Check initial position OR is at the bottom right
      if (i === 0 || j === width) {
        goingDown = true;

        if (j === width) {
          i += 1;
        } else {
          j += 1;
        }
      } else {
        i -= 1;
        j += 1;
      }
    }
  }

  return matrixResult;
};

const isOutOfBounds = (
  i: number,
  j: number,
  height: number,
  width: number
): boolean => i < 0 || i > height || j < 0 || j > width;

console.log("Function", ZigZagTraverse(sample));
