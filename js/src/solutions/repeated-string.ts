/**
 * returns the frequency of a in the substring
 * @param s - string to repeat
 * @param n - the number of characters to consider
 * @returns the frequency of a in the substring
 */
function repeatedString (s: string, n: number): number {
  const share = Math.floor(n / s.length)
  const splited = s.split('')

  let frequency = 0

  if (share === 0) {
    for (let i = 0; i < n; i++) {
      if (splited[i] === 'a') {
        frequency++
      }
    }

    return frequency
  } else {
    const frequencyOfPartial = splited.reduce((acc, cur) => {
      return cur === 'a' ? acc + 1 : acc
    }, 0)

    frequency = frequencyOfPartial * share

    const rest = n % s.length
    if (rest > 0) {
      for (let i = 0; i < rest; i++) {
        if (splited[i] === 'a') {
          frequency++
        }
      }
    }

    return frequency
  }
}

export { repeatedString }
