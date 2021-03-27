/**
 * returns the minimum number of jumps required
 * @param clouds - an array of binary integers
 * @returns the minimum number of jumps required
 */
function jumpingOnClouds (clouds: number[]): number {
  let numberOfJumps = 0
  let currentPosition = 0

  while (currentPosition < clouds.length - 1) {
    currentPosition = clouds[currentPosition + 2] === 1
      ? currentPosition + 1
      : currentPosition + 2

    numberOfJumps++
  }

  return numberOfJumps
}

export { jumpingOnClouds }
