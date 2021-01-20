import { migratoryBirds } from '@solutions/migratory-birds'

test('migratoryBirds', () => {
  const typeOfBirds = [1, 4, 4, 4, 5, 3]

  const actual = migratoryBirds(typeOfBirds)
  const expected = 4

  expect(actual).toBe(expected)
})
