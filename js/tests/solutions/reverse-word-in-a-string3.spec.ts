import { reverseWords } from '@solutions/reverse-word-in-a-string3'

test('reverseWords', () => {
  const input = "Let's take LeetCode contest"

  const actual = reverseWords(input)
  const expected = "s'teL ekat edoCteeL tsetnoc"

  expect(actual).toBe(expected)
})
