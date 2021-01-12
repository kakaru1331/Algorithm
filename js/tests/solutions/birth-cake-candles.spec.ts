import { birthdayCakeCandles } from '@solutions/birth-cake-candles'

test('birthdayCakeCandles', () => {
  const candles = [4, 4, 1, 3]

  const actual = birthdayCakeCandles(candles)
  const expected = 2

  expect(actual).toBe(expected)
})
