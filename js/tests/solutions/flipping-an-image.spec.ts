import { flipAndInvertImage } from '@solutions/flipping-an-image'

test('flipAndInvertImage', () => {
  const input = [[1, 1, 0, 0], [1, 0, 0, 1], [0, 1, 1, 1], [1, 0, 1, 0]]

  const actual = flipAndInvertImage(input)
  const expected = [[1, 1, 0, 0], [0, 1, 1, 0], [0, 0, 0, 1], [1, 0, 1, 0]]

  expect(actual).toEqual(expected)
})
