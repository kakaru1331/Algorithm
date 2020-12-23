import { compareTriplets } from '@solutions/compare-the-triplets'

test('compareTriplets', () => {
  const scoresOfA = [5, 6, 7]
  const scoresOfB = [3, 6, 10]

  const actual = compareTriplets(scoresOfA, scoresOfB)
  const expected = [1, 1]

  expect(actual).toEqual(expected)
})
