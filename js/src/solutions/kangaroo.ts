const POSSIBLE = 'YES'
const IMPOSSIBLE = 'NO'

/**
 * Returns 'YES' or 'NO' depending on whether two kangaroo can meet
 * @param x1 - location of one kangaroo
 * @param v1 - the distance that changes every time one kangaroo jumps
 * @param x2 - location of other kangaroo
 * @param v2 - the distance that changes every time other kangaroo jumps
 */
function kangaroo (x1: number, v1: number, x2: number, v2: number): string {
  if (v1 <= v2) {
    return IMPOSSIBLE
  }

  if (x1 > x2) {
    return IMPOSSIBLE
  }

  if (x1 === x2) {
    return POSSIBLE
  }

  return kangaroo(x1 + v1, v1, x2 + v2, v2)
}

export { kangaroo, POSSIBLE, IMPOSSIBLE }
