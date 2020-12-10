import { uniqueMorseRepresentations } from '@solutions/unique-morse-code-words'

test('uniqueMorseRepresentations', () => {
  const words = ['gin', 'zen', 'gig', 'msg']

  const actual = uniqueMorseRepresentations(words)
  const expected = 2

  expect(actual).toBe(expected)
})
