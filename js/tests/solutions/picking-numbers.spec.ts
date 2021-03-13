import { pickingNumbers } from '@solutions/picking-numbers'

describe('pickingNumbers', () => {
  test('case 1', () => {
    const numbers = [4, 6, 5, 3, 3, 1]

    const actual = pickingNumbers(numbers)
    const expected = 3

    expect(actual).toBe(expected)
  })

  test('case 2', () => {
    const numbers = [98, 3, 99, 1, 97, 2]

    const actual = pickingNumbers(numbers)
    const expected = 2

    expect(actual).toBe(expected)
  })
})
