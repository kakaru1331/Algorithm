import { selfDividingNumbers } from '@solutions/self-dividing-numbers'

test('selfDividingNumbers', () => {
  const left = 1
  const right = 22

  const actual = selfDividingNumbers(left, right)
  const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]

  expect(actual).toEqual(expected)
})
