import { binaryGap } from '@solutions/binary-gap'

describe('binaryGap', () => {
  test('case1', () => {
    const num = 1041 // 10000010001_2

    const actual = binaryGap(num)
    const expected = 5

    expect(actual).toBe(expected)
  })

  test('case2', () => {
    const num = 328 // 101001000_2

    const actual = binaryGap(num)
    const expected = 2

    expect(actual).toBe(expected)
  })

  test('case3', () => {
    const num = 51712 // 110010100000000_2

    const actual = binaryGap(num)
    const expected = 2

    expect(actual).toBe(expected)
  })

  test('case4', () => {
    const num = 74901729 // 100011101101110100011100001

    const actual = binaryGap(num)
    const expected = 4

    expect(actual).toBe(expected)
  })
})
