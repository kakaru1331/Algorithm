/**
 * reverse integer
 * @param x a number
 * @returns reversed integer
 */
function reverse (x: number): number {
  if (x === 0) { return x }

  const strX = x.toString()
  const arrayX = strX.split('')
  let shiftedCharacter: string|undefined = ''

  if (arrayX[0] === '0' || arrayX[0] === '-') {
    shiftedCharacter = arrayX.shift()
  }

  arrayX.reverse()

  if (shiftedCharacter === '-') {
    arrayX.unshift(shiftedCharacter)
  }

  const reverseStrX = arrayX.join('')
  const reverseX = parseInt(reverseStrX)

  const SAFE_MIN_INTEGER = Math.pow(-2, 31)
  const SAFE_MAX_INTEGER = Math.pow(2, 31) - 1

  if (reverseX < SAFE_MIN_INTEGER || reverseX > SAFE_MAX_INTEGER) { return 0 }

  return reverseX
}

export { reverse }
