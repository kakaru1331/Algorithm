import { twoSum } from '@solutions/twoSum'

test('twoSum', () => {
  const nums = [2, 7, 11, 15]
  const target = 9

  const actual = twoSum(nums, target)
  const expected = [0, 1]

  expect(actual).toEqual(expected)
})
