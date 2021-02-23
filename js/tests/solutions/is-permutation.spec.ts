import { isPermutation } from '@solutions/is-permutation'

describe('isPermutation', () => {
  test('returns true when the two characters are permutations', () => {
    const str1 = 'abcd'
    const str2 = 'dcba'

    const actual = isPermutation(str1, str2)
    const expected = true

    expect(actual).toBe(expected)
  })

  test('returns false when the two characters are not permutations', () => {
    const str1 = 'abcd'
    const str2 = 'dcbf'

    const actual = isPermutation(str1, str2)
    const expected = false

    expect(actual).toBe(expected)
  })
})
