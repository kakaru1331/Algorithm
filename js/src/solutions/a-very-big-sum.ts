/**
 * return the sum of all array elements
 * @param ar an aray of integers
 */
function aVeryBigSum (ar: number[]): number {
  return ar.reduce((accumulator: number, currentValue: number) => accumulator + currentValue, 0)
}

export { aVeryBigSum }
