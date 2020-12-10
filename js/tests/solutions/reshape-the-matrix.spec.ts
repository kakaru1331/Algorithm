import { matrixReshape } from '@solutions/reshape-the-matrix'

test('matrixReshape', () => {
  const nums = [[1, 2], [3, 4]]
  const r = 1
  const c = 4

  const actual = matrixReshape(nums, r, c)
  const expected = [[1, 2, 3, 4]]

  expect(actual).toEqual(expected)
})
