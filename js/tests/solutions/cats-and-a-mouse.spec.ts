import { catsAndAMouse, CATS, MOUSE } from '@solutions/cats-and-a-mouse'

describe('catsAndAMouse', () => {
  test('When Cat A is closest to the Mouse C, It returns Cat A', () => {
    const x = 2
    const y = 1
    const z = 3

    const actual = catsAndAMouse(x, y, z)
    const expected = CATS.A

    expect(actual).toBe(expected)
  })

  test('When Cat B is closest to the Mouse C, It returns Cat A', () => {
    const x = 1
    const y = 2
    const z = 3

    const actual = catsAndAMouse(x, y, z)
    const expected = CATS.B

    expect(actual).toBe(expected)
  })

  test('When the distance between the two cats is the same, It returns Mouse C', () => {
    const x = 1
    const y = 1
    const z = 3

    const actual = catsAndAMouse(x, y, z)
    const expected = MOUSE

    expect(actual).toBe(expected)
  })
})
