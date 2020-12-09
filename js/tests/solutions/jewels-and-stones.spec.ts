import { numJewelsInStones } from '@solutions/jewels-and-stones'

test('numJewelsInStones', () => {
  const jewels = 'aA'
  const stones = 'aAAbbbb'

  const actual = numJewelsInStones(jewels, stones)
  const expected = 3

  expect(actual).toEqual(expected)
})
