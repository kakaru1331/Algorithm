import { breakingRecords } from '@solutions/breaking-records'

test('breakingRecords', () => {
  const scores = [10, 5, 20, 20, 4, 5, 2, 25, 1]

  const actual = breakingRecords(scores)
  const expected = [2, 4]

  expect(actual).toEqual(expected)
})
