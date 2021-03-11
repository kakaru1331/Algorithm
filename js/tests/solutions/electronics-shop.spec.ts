import { getMoneySpent } from '@solutions/electronics-shop'

test('getMoneySpent', () => {
  const keyboards = [3, 1]
  const drives = [5, 2, 8]
  const budget = 10

  const actual = getMoneySpent(keyboards, drives, budget)
  const expected = 9

  expect(actual).toBe(expected)
})
