/**
 * returning divisible sum pairs count in the array
 * @param n length of array
 * @param k divider
 * @param ar target array
 * @returns divisible sum paris count
 */
function divisibleSumPairs (n: number, k: number, ar: number[]): number {
  let divisibleSumPairCount = 0

  for (let i = 0; i < ar.length - 1; i++) {
    for (let j = i + 1; j < ar.length; j++) {
      const sum = ar[i] + ar[j]

      if (sum % k === 0) {
        divisibleSumPairCount++
      }
    }
  }

  return divisibleSumPairCount
}

export { divisibleSumPairs }
