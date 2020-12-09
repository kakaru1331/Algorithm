/**
 * get can be typed using letters of alphabet
 * on only one row's of keyboard
 * @param words some words
 */
function findWords (words: string[]): string[] {
  const topLine = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']
  const middleLine = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l']
  const bottomLline = ['z', 'x', 'c', 'v', 'b', 'n', 'm']
  const set = new Set()
  const returnArr: string[] = []

  words.forEach(word => {
    set.clear()
    const tmp = word.toLowerCase()

    for (const s of tmp) {
      if (topLine.includes(s)) { set.add(1) }

      if (middleLine.includes(s)) { set.add(2) }

      if (bottomLline.includes(s)) { set.add(3) }

      if (set.size > 1) { return }
    }

    returnArr.push(word)
  })

  return returnArr
}

export { findWords }
