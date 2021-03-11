/**
 * returns maximum payable amount
 * @param keyboards - prices of keyboards
 * @param drives - prices of drives
 * @param b - budget
 * @returns maximum payable amount
 */
function getMoneySpent (keyboards: number[], drives: number[], b: number): number {
  let mostExpensive = -1

  for (const keyboard of keyboards) {
    if (keyboard >= b - 1) {
      continue
    }

    for (const drive of drives) {
      if (keyboard >= b - 1) {
        continue
      }
      const sum = keyboard + drive

      if (sum <= b && sum > mostExpensive) {
        mostExpensive = sum
      }
    }
  }

  return mostExpensive
}

export { getMoneySpent }
