import { repeatedString } from '@solutions/repeated-string'

describe('repeatedString', () => {
  test('case 1', () => {
    const str = 'aba'
    const considerTo = 10

    const actual = repeatedString(str, considerTo)
    const expected = 7

    expect(actual).toBe(expected)
  })

  test('case 2', () => {
    const str = 'a'
    const considerTo = 1000000000000

    const actual = repeatedString(str, considerTo)
    const expected = 1000000000000

    expect(actual).toBe(expected)
  })

  test('case 3', () => {
    const str = 'aab'
    const considerTo = 882787

    const actual = repeatedString(str, considerTo)
    const expected = 588525

    expect(actual).toBe(expected)
  })
})
