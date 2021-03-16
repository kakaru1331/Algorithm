/**
 * returns maximum binary gap
 * @param num - an integer within the range [1..2,147,483,647]
 * @returns 0 or greater
 */
function binaryGap (num: number): number {
  const bin = decimalToBinary(num)
  const splitted = bin.split('')

  let encountLeft = false
  let max = 0
  let cur = 0

  for (const strBit of splitted) {
    const bit = Number(strBit)

    // checking first contact of one
    if (!encountLeft) {
      if (bit === 1) {
        encountLeft = true
      }
    }

    if (encountLeft) {
      if (bit === 0) {
        cur++
      } else {
        if (max < cur) {
          max = cur
        }
        cur = 0
      }
    }
  }

  return max
}

function decimalToBinary (num: number) {
  return num.toString(2)
}

export { binaryGap }
