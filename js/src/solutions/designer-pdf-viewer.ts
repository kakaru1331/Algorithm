type Alphabet = 'a' | 'b' | 'c' | 'd' | 'e' |
'f' | 'g' | 'h' | 'i' | 'j' |
'k' | 'l' | 'm' | 'n' | 'o' |
'p' | 'q' | 'r' | 's' | 't' |
'u' | 'v' | 'w' | 'x' | 'y' | 'z'

type AlphabetToHeight = {
  // eslint-disable-next-line no-unused-vars
  [key in Alphabet]: number
}

/**
 * returns the size of the highlighted area
 * @param heights - the heights of each letter
 * @param word - a string
 * @returns the size of the highlighted area
 */
function designerPdfViewer (heights: number[], word: string): number {
  const alphabets: Alphabet[] = ['a', 'b', 'c', 'd', 'e',
    'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n', 'o',
    'p', 'q', 'r', 's', 't',
    'u', 'v', 'w', 'x', 'y', 'z'
  ]

  // eslint-disable-next-line no-unused-vars
  const alphabetToHeight = heights.reduce((acc: {[key in Alphabet]?: number}, cur, i) => {
    const alphabet = alphabets[i]
    acc[alphabet] = cur

    return acc
  }, {}) as AlphabetToHeight

  const heighest = word.split('').reduce((acc, cur) => {
    const height = alphabetToHeight[cur as Alphabet]

    if (acc < height) {
      acc = height
    }

    return acc
  }, 0)

  return heighest * word.length
}

export { designerPdfViewer }
