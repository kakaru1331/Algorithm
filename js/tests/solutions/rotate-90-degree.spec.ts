import { rotate90Degree } from '@solutions/rotate-90-degree'

describe('rotate90Degree', () => {
  test('if passed not a square matrix should throw error', () => {
    const notSquareMatrix = [
      [1],
      [2]
    ]

    try {
      rotate90Degree(notSquareMatrix)
    } catch (e) {
      expect(e.message).toBe('the matrix is not a square matrix')
    }
  })

  test('rotate 2x2 matrix', () => {
    const matrix = [
      [1, 2],
      [3, 4]
    ]
    const expected = [
      [3, 1],
      [4, 2]
    ]

    const rotatedMatrix = rotate90Degree(matrix)

    expect(rotatedMatrix).toEqual(expected)
  })

  test('rotate 4x4 matrix', () => {
    const matrix = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16]
    ]
    const expected = [
      [13, 9, 5, 1],
      [14, 10, 6, 2],
      [15, 11, 7, 3],
      [16, 12, 8, 4]
    ]

    const rotatedMatrix = rotate90Degree(matrix)

    expect(rotatedMatrix).toEqual(expected)
  })
})
