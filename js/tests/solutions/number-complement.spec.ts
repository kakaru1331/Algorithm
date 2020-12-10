import { findComplement } from '@solutions/number-complement'

test('findComplement', () => {
  const num = 5

  const actual = findComplement(num)
  const expected = 2

  expect(actual).toEqual(expected)
})
