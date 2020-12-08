/**
 * return the maximum number of differnet types of candies
 * @param candies
 */
function distributeCandies (candies: Array<number>) {
  candies.sort()

  const portion = candies.length / 2
  let typesOfCandies = 0
  let prevCandy = null

  for (let i = 0; i < candies.length; i++) {
    if (prevCandy !== candies[i]) {
      prevCandy = candies[i]
      typesOfCandies++
    }

    if (portion === typesOfCandies) { break }
  }

  return typesOfCandies
};

export { distributeCandies }
