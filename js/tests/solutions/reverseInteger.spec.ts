import { reverse } from '@solutions/reverseInteger'

test('reverse', () => {
  const input = 123

  const actual = reverse(input)
  const expected = 321

  expect(actual).toBe(expected)
})
