/**
 * the number of different transformations among all words
 * @param words
 */
function uniqueMorseRepresentations (words: string[]): number {
  const morseCodeEnum: { [key: string]: any } = {
    a: '.-',
    b: '-...',
    c: '-.-.',
    d: '-..',
    e: '.',
    f: '..-.',
    g: '--.',
    h: '....',
    i: '..',
    j: '.---',
    k: '-.-',
    l: '.-..',
    m: '--',
    n: '-.',
    o: '---',
    p: '.--.',
    q: '--.-',
    r: '.-.',
    s: '...',
    t: '-',
    u: '..-',
    v: '...-',
    w: '.--',
    x: '-..-',
    y: '-.--',
    z: '--..'
  }
  let concatMorse = ''
  const morseCodeSet = new Set()

  for (let i = 0; i < words.length; i++) {
    const wordArr = words[i].split('')

    for (let j = 0; j < wordArr.length; j++) {
      const character = wordArr[j]

      concatMorse += morseCodeEnum[character]
    }

    morseCodeSet.add(concatMorse)
    concatMorse = ''
  }

  return morseCodeSet.size
}

export { uniqueMorseRepresentations }
