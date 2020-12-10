import { reverseString } from '@solutions/reverse-string'

test('reverseString', () => {
  const input = ['h', 'e', 'l', 'l', 'o']

  const reversedString = reverseString(input)
  const expected = ['o', 'l', 'l', 'e', 'h']

  expect(reversedString).toEqual(expected)
})
