/**
 * get total count pair of socks
 * @param n total count of socks
 * @param ar socks
 */
function sockMerchant (n: number, ar: number[]) {
  const tester: Set<number> = new Set([])
  let pairOfSocks = 0

  for (let i = 0; i < n; i++) {
    const aSock = ar[i]
    if (tester.has(aSock)) {
      pairOfSocks++
      tester.delete(aSock)
    } else {
      tester.add(aSock)
    }
  }

  return pairOfSocks
}

export { sockMerchant }
