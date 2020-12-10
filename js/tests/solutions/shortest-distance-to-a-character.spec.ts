import { shortestToChar } from '@solutions/shortest-distance-to-a-character'

test('shortestToChar', () => {
  const S = 'loveleetcode'
  const C = 'e'

  const actual = shortestToChar(S, C)
  const expected = [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]

  expect(actual).toEqual(expected)
})
