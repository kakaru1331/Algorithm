import { findWords } from '@solutions/keyboard-row'

test('findWords', () => {
  const input = ['Hello', 'Alaska', 'Dad', 'Peace']

  const actual = findWords(input)
  const expected = ['Alaska', 'Dad']

  expect(actual).toEqual(expected)
})
