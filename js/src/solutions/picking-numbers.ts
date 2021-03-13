/**
 * returns the length of the longest subarray that meets the criterion
 * @param numbers - an array of integers
 * @returns the length of the longest subarray that meets the criterion
 */
function pickingNumbers (numbers: number[]): number {
  const numMap: { [key: number]: number; } = {}
  const numSet = new Set()

  for (const num of numbers) {
    numMap[num] = numMap[num] ? numMap[num] + 1 : 1
    numSet.add(num)
  }

  let longestLength = 0

  for (const num of Array.from(numSet) as number[]) {
    const lessCount = numMap[num - 1]
    const equalCount = numMap[num]
    const moreCount = numMap[num + 1]

    if (lessCount) {
      const length = equalCount + lessCount
      if (length > longestLength) {
        longestLength = length
      }
    }

    if (moreCount) {
      const length = equalCount + moreCount
      if (length > longestLength) {
        longestLength = length
      }
    }

    const length = equalCount
    if (length > longestLength) {
      longestLength = length
    }
  }

  return longestLength
}

export { pickingNumbers }
