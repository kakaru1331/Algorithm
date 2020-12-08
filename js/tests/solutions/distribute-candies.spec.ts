import { distributeCandies } from '@solutions/distribute-candies'

test('distributeCandies', () => {
  const candies = [1, 1, 2, 2, 3, 3]

  const typesOfCandies = distributeCandies(candies)
  const expected = 3

  expect(typesOfCandies).toBe(expected)
})
