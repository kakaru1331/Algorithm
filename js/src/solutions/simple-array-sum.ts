/**
 * get sum of numbers
 * @param ar numbers
 */
function simpleArraySum (ar: number[]): number {
  return ar.reduce((acc, item) => acc + item, 0)
}

export { simpleArraySum }
