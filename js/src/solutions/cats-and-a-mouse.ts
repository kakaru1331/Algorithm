const CATS = {
  A: 'Cat A',
  B: 'Cat B'
}

const MOUSE = 'Mouse C'

/**
 * returns a winner among the three animals
 * @param x - the position of Cat A
 * @param y - the position of Cat B
 * @param z - the position of Mouse C
 * @returns winner
 */
function catsAndAMouse (x: number, y: number, z: number): string {
  const distanceMouseAndCatA = Math.abs(z - x)
  const distanceMouseAndCatB = Math.abs(z - y)

  if (distanceMouseAndCatA === distanceMouseAndCatB) {
    return MOUSE
  } else if (distanceMouseAndCatA < distanceMouseAndCatB) {
    return CATS.A
  } else {
    return CATS.B
  }
}

export { catsAndAMouse, CATS, MOUSE }
