import { solveMeFirst } from '@solutions/solve-me-first'

test('solveMeFirst', () => {
  const a = 2
  const b = 3

  const actual = solveMeFirst(a, b)
  const expected = 5

  expect(actual).toBe(expected)
})
