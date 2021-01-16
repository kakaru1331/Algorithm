type Params = {
  fruits: number[],
  offsetOfATree: number,
  start: number,
  end: number
}

/**
 * count apples and oranges are with in range
 * @param s starting point of the house location
 * @param t ending location of the house location
 * @param a location of the Apple tree
 * @param b location of the Orange tree
 * @param apples distances at which each apple falls from the tree
 * @param oranges distances at which each orange falls from the tree
 */
function countApplesAndOranges (s: number, t: number, a: number, b: number, apples: number[], oranges: number[]) {
  const appleParams: Params = {
    fruits: apples,
    offsetOfATree: a,
    start: s,
    end: t
  }
  const applesWithInRange = filterWithInRange(appleParams)

  const orangeParams: Params = {
    fruits: oranges,
    offsetOfATree: b,
    start: s,
    end: t
  }
  const orangesWithInRange = filterWithInRange(orangeParams)

  const countOfApplesDroppedOnTheHouse = applesWithInRange.length
  const countOfOrangesDroppedOnTheHouse = orangesWithInRange.length

  console.log(countOfApplesDroppedOnTheHouse)
  console.log(countOfOrangesDroppedOnTheHouse)
}

function getOffsetOfAFruit (offsetOfATree: number, distanceFromATree: number): number {
  return offsetOfATree + distanceFromATree
}

function isWithInRange (start: number, end: number, offset: number): boolean {
  return (start <= offset) && (offset <= end)
}

function filterWithInRange ({ fruits, offsetOfATree, start, end }: Params) {
  return fruits.filter((fruit) => {
    const offsetOfAFruit = getOffsetOfAFruit(offsetOfATree, fruit)
    return isWithInRange(start, end, offsetOfAFruit)
  })
}

export { countApplesAndOranges }
