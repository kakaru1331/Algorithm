/**
 * returns 2 dimension number array
 * it modifies given array like rotating a matrix
 * @param matrix - matrix to rotate
 */
function rotate90Degree (matrix: number[][]): number[][] {
  // validation
  if (matrix.length === 0 ||
    matrix.length !== matrix[0].length
  ) {
    throw new Error('the matrix is not a square matrix')
  }

  // N x N matrix
  const n = matrix.length

  // layer is zero base
  for (let layerOfMatrix = 0; layerOfMatrix < n / 2; layerOfMatrix++) {
    // divide a layer into four parts, top, right, bottom, left
    // and each part has elements from start to end
    // ex) in 4 x 4 matrix, layer 0 -> start of top: (0,0) and end of top: (0, 2)
    const start = layerOfMatrix
    const end = n - 1 - layerOfMatrix

    for (let i = start; i < end; i++) {
      const offset = i - start

      const top = matrix[start][i]

      matrix[start][i] = matrix[end - offset][start]
      matrix[end - offset][start] = matrix[end][end - offset]
      matrix[end][end - offset] = matrix[i][end]
      matrix[i][end] = top
    }
  }

  return matrix
}

export { rotate90Degree }
