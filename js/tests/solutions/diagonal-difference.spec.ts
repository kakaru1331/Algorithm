import { diagonalDifference } from '@solutions/diagonal-difference'

test('diagonalDifference', () => {
  const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9]
  ]

  const actual = diagonalDifference(arr)
  const expected = 2

  expect(actual).toBe(expected)
})
