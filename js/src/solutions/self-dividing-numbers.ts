/**
 * get self dividing numbers two number from left to right
 * @param left a number from
 * @param right a number to
 * @returns self dividing numbers two number from left to right
 */
function selfDividingNumbers (left: number, right: number): number[] {
  const numArray = []
  let str = ''
  let strLeng = 0

  for (let currentNum = left; currentNum <= right; currentNum++) {
    str = currentNum.toString()

    if (str.includes('0')) { continue }

    strLeng = str.length
    for (let i = 0; i < strLeng; i++) {
      const digit = parseInt(str[i])

      if (currentNum % digit !== 0) { break }

      if (i === strLeng - 1) { numArray.push(currentNum) }
    }
  }

  return numArray
};

export { selfDividingNumbers }
