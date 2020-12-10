/**
 * get an array of integers representing the shortest distance from the character
 * @param S given string
 * @param C given character
 * @returns an array of integers representing the shortest distance from the character
 */
function shortestToChar (S: string, C: string) {
  const distanceArr = Array.of(S.length)
  const endIndex = S.length - 1
  let preOffset = 0
  let offset = 0
  let distance

  while (true) {
    offset = S.indexOf(C, preOffset)

    if (offset === -1) { break }

    distanceArr[offset] = 0

    distance = 1
    for (let i = offset - 1; i >= 0; i--) {
      if (distanceArr[i] < distance) { break }

      distanceArr[i] = distance
      distance++
    }

    distance = 1
    for (let i = offset + 1; i <= endIndex; i++) {
      if (distanceArr[i] < distance) { break }

      distanceArr[i] = distance
      distance++
    }

    preOffset = offset + 1
  }

  return distanceArr
};

export { shortestToChar }
