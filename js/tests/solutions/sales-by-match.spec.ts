import { sockMerchant } from '@solutions/sales-by-match'

test('sockMerchant', () => {
  const n = 9
  const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]

  const actual = sockMerchant(n, ar)
  const expected = 3

  expect(actual).toBe(expected)
})
