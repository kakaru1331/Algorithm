import { hurdleRace } from '@solutions/the-hurdle-race'

describe('hurdleRace', () => {
  test('when the character naturally jumpable 4 and heighest hurdle 6', () => {
    const naturallyJumpable = 4
    const heights = [1, 6, 3, 5, 2]

    const actual = hurdleRace(naturallyJumpable, heights)
    const expected = 2

    expect(actual).toBe(expected)
  })

  test('when the character naturally jumpable every hurdle', () => {
    const naturallyJumpable = 7
    const heights = [2, 5, 4, 5, 2]

    const actual = hurdleRace(naturallyJumpable, heights)
    const expected = 0

    expect(actual).toBe(expected)
  })
})
