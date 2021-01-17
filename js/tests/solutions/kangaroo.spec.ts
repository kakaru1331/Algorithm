import { kangaroo, POSSIBLE } from '@solutions/kangaroo'

test('kangaroo', () => {
  const x1 = 0
  const v1 = 3
  const x2 = 4
  const v2 = 2

  const actual = kangaroo(x1, v1, x2, v2)
  const expected = POSSIBLE

  expect(actual).toBe(expected)
})
