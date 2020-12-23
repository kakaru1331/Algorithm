/**
 * return each point
 * @param a scores of A
 * @param b scores of B
 */
function compareTriplets (a: number[], b: number[]): [number, number] {
  let pointOfA = 0
  let pointOfB = 0
  const lengthOfScores = a.length

  for (let i = 0; i < lengthOfScores; i++) {
    if (a[i] > b[i]) {
      pointOfA++
    } else if (a[i] < b[i]) {
      pointOfB++
    }
  }

  return [pointOfA, pointOfB]
}

export { compareTriplets }
