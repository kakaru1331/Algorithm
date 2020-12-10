/**
 * return complement number
 * @param num positive integer
 */
function findComplement (num: number): number {
  const binaryStr = num.toString(2)
  let complementNum = 0

  for (let i = 0; i < binaryStr.length; i++) {
    if (binaryStr[i] === '0') { complementNum += Math.pow(2, binaryStr.length - i - 1) }
  }

  return complementNum
}

export { findComplement }
