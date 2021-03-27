import { jumpingOnClouds } from '@solutions/jumping-on-the-clouds'

describe('jumpingOnClouds', () => {
  test('case 1', () => {
    const clouds = [0, 0, 1, 0, 0, 1, 0]

    const actual = jumpingOnClouds(clouds)
    const expected = 4

    expect(actual).toBe(expected)
  })

  test('case 2', () => {
    const clouds = [0, 0, 0, 1, 0, 0, 0]

    const actual = jumpingOnClouds(clouds)
    const expected = 3

    expect(actual).toBe(expected)
  })

  test('case 3', () => {
    const clouds = [0, 0, 1, 0, 0, 0, 0, 1, 0, 0]

    const actual = jumpingOnClouds(clouds)
    const expected = 6

    expect(actual).toBe(expected)
  })
})
