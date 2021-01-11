import { aVeryBigSum } from '@solutions/a-very-big-sum'

test('aVeryBigSum', () => {
  const ar = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]

  const actual = aVeryBigSum(ar)
  const expected = 5000000015

  expect(actual).toBe(expected)
})
