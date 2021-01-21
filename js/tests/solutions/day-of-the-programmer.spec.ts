import { dayOfProgrammer } from '@solutions/day-of-the-programmer'

test('dayOfProgrammer', () => {
  const year = 2017

  const actual = dayOfProgrammer(year)
  const expected = '13.09.2017'

  expect(actual).toBe(expected)
})
