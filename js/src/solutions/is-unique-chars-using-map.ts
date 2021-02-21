type Map = {
  [key: string]: number;
}

/**
 * returns is given string composed of unique characters only
 * @param str
 */
function isUniqueCharsUsingMaps (str: string): boolean {
  const splittedStr = str.split('')
  const map: Map = {}

  for (let i = 0; i < splittedStr.length; i++) {
    const char = splittedStr[i]

    if (map[char] !== undefined) {
      return false
    }

    map[char] = 1
  }

  return true
}

export { isUniqueCharsUsingMaps }
