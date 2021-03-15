/**
 * returns minimum number of reqired potion
 * @param jumpable - the height the character can jump naturally
 * @param heights - the heights of each hurdle
 * @returns the minimum number of doses required, always 0 or more
 */
function hurdleRace (jumpable: number, heights: number[]): number {
  let numberOfPotionsRequired = 0
  let crossable = jumpable

  for (const h of heights) {
    while (crossable < h) {
      numberOfPotionsRequired++
      crossable++
    }
  }

  return numberOfPotionsRequired
}

export { hurdleRace }
