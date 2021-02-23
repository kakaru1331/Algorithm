type IsPermutationMap = {
  [key: string]: number;
}

/**
 * compare the two characters are permutations
 * @param str1 - comparison target 1
 * @param str2 - comparison target 2
 */
function isPermutation (str1: string, str2: string): boolean {
  if (str1.length !== str2.length) {
    return false
  }

  // make map of str1 used string as key and number as value
  const splittedStr1 = str1.split('')
  const mapOfStr1: IsPermutationMap = {}
  for (let i = 0; i < splittedStr1.length; i++) {
    const char = splittedStr1[i]

    if (mapOfStr1[char] !== undefined) {
      mapOfStr1[char] = 1
    } else {
      mapOfStr1[char] += 1
    }
  }

  const splittedStr2 = str2.split('')
  for (let j = 0; j < splittedStr2.length; j++) {
    const char = splittedStr2[j]

    if (mapOfStr1[char] === undefined) {
      return false
    } else {
      mapOfStr1[char] -= 1
    }
  }

  return true
}

export { isPermutation }
