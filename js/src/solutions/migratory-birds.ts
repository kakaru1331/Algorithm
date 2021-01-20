/**
 * return most common type of birds migrating
 * @param arr - type of birds migrating
 * @returns most common type of birds
 */
function migratoryBirds (arr: number[]): number {
  const birds: { [key: string]: number[] } = {}

  arr.forEach((typeOfBird) => {
    if (birds[typeOfBird] === undefined) {
      birds[typeOfBird] = []
    }

    birds[typeOfBird].push(typeOfBird)
  })

  let mostCommonBirdType = -1
  let countOfMostCommonBird = 0
  Object.keys(birds).forEach((birdType) => {
    const birdCount = birds[birdType].length

    if (birdCount > countOfMostCommonBird) {
      mostCommonBirdType = Number(birdType)
      countOfMostCommonBird = birdCount
    }
  })

  return mostCommonBirdType
}

export { migratoryBirds }
