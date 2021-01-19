import { divisibleSumPairs } from '@solutions/divisible-sum-pairs'

test('divisibleSumPairs', () => {
  const n = 6
  const k = 3
  const ar = [1, 3, 2, 6, 1, 2]

  const actual = divisibleSumPairs(n, k, ar)
  const expected = 5

  expect(actual).toBe(expected)
})
