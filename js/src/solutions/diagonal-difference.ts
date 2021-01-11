/**
 * return the absolute diagonal difference
 * @param arr the square matrix
 */
function diagonalDifference (arr: number[][]): number {
  return Math.abs(getSumOfLeftDiagnoal(arr) - getSumOfRightDiagnoal(arr))
}

/**
 * return the sum of left diagonal
 * @param arr the square matrix
 */
function getSumOfLeftDiagnoal (arr: number[][]): number {
  let x = 0; let y = 0
  let sum = 0

  for (let i = 0; i < arr.length; i++) {
    sum += arr[x][y]
    x++
    y++
  }

  return sum
}

/**
 * return the sum of right diagonal
 * @param arr the square matrix
 */
function getSumOfRightDiagnoal (arr: number[][]): number {
  let x = 0
  let y = arr.length - 1
  let sum = 0

  for (let i = 0; i < arr.length; i++) {
    sum += arr[x][y]
    x++
    y--
  }

  return sum
}

export { diagonalDifference }
