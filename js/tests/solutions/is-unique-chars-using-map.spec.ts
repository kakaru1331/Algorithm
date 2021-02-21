import { isUniqueCharsUsingMaps } from '@solutions/is-unique-chars-using-map'

describe('isUniqueCharsUsingMaps', () => {
  test('returns true when str is composed of unique characters', () => {
    const uniqueChars = 'abcdefg'

    const actual = isUniqueCharsUsingMaps(uniqueChars)
    const expected = true

    expect(actual).toBe(expected)
  })

  test('returns false when str contains duplicate characters', () => {
    const uniqueChars = 'abbcdefg'

    const actual = isUniqueCharsUsingMaps(uniqueChars)
    const expected = false

    expect(actual).toBe(expected)
  })
})
