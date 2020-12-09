/**
 * get how many jewels in stone
 * @param J letters of jewel
 * @param S letters of stone
 * @returns how many jewels in stone
 */
function numJewelsInStones (J: string, S: string): number {
  let count = 0
  const arrJ = J.split('')

  for (let i = 0; i < arrJ.length; i++) {
    const jewel = J[i]
    let jewelIndex = S.indexOf(jewel)

    if (jewelIndex === -1) {
      continue
    } else {
      count++
      jewelIndex++

      for (true; jewelIndex <= S.length; jewelIndex++) {
        if (jewel === S[jewelIndex]) {
          count++
        }
      }
    }
  }

  return count
}

export { numJewelsInStones }
