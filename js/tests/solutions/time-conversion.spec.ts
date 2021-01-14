import { timeConversion } from '@solutions/time-conversion'

test('timeConversion', () => {
  const time = '07:05:45PM'

  const actual = timeConversion(time)
  const expected = '19:05:45'

  expect(actual).toBe(expected)
})
