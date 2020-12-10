/**
 * functuate like reshape of MATLAB
 * @param nums 2 x 2 matrix
 * @param r row
 * @param c column
 */
function matrixReshape (nums: number[][], r: number, c: number): number[][] {
  const numsRow = nums.length
  const numsCol = nums[0].length
  const queue = []

  if (numsRow * numsCol !== r * c) { return nums }

  for (let i = 0; i < numsRow; i++) {
    for (let j = 0; j < numsCol; j++) {
      queue.unshift(nums[i][j])
    }
  }

  const reshapedMatrix = []
  for (let x = 0; x < r; x++) {
    reshapedMatrix.push(new Array(c))
  }

  for (let k = 0; k < r; k++) {
    for (let l = 0; l < c; l++) {
      reshapedMatrix[k][l] = queue.pop()
    }
  }

  return reshapedMatrix
};

export { matrixReshape }
