/**
 * print staircase
 * @param n height of staircase
 */
function staircase (n: number) {
  const height = n
  const SPACE = ' '
  const SYMBOL = '#'

  let spaceCount = 0
  let printQueue = []
  for (let i = 1; i <= height; i++) {
    spaceCount = height - i
    printQueue = []

    for (let j = 1; j <= height; j++) {
      if (spaceCount > 0) {
        printQueue.push(SPACE)
        spaceCount--
      } else {
        printQueue.push(SYMBOL)
      }
    }

    console.log(printQueue.join(''))
  }
}

export { staircase }
