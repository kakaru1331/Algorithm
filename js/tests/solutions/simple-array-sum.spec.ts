import { simpleArraySum } from '@solutions/simple-array-sum'

test('simpleArraySum', () => {
  const ar = [1, 2, 3, 4, 10, 11]

  const sumOfNumbers = simpleArraySum(ar)
  const expected = 31

  expect(sumOfNumbers).toBe(expected)
})
