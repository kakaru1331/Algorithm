/**
 * print minumum and maximum values
 * that can be calculated by summing exactly four of the five integers
 */
function miniMaxSum (arr: number[]) {
  const minimum = getMinimum(arr)
  const maximum = getMaximum(arr)

  console.log(`${minimum} ${maximum}`)
}

/**
 * return the minimum value that the sum of four numbers
 */
function getMinimum (arr: number[]): number {
  let maximumNumber = 0
  let maximumIndex = 0

  arr.forEach((num, index) => {
    if (maximumNumber < num) {
      maximumNumber = num
      maximumIndex = index
    }
  })

  const arrExceptMaximum = arr.filter((num, index) => {
    return index !== maximumIndex
  })

  return arrExceptMaximum.reduce((acc, cur) => acc + cur)
}

/**
 * return the maximum value that the sum of four numbers
 */
function getMaximum (arr: number[]): number {
  let minimumNumber = Number.MAX_SAFE_INTEGER
  let minimumIndex = 0

  arr.forEach((num, index) => {
    if (minimumNumber > num) {
      minimumNumber = num
      minimumIndex = index
    }
  })

  const arrExceptMaximum = arr.filter((num, index) => {
    return index !== minimumIndex
  })

  return arrExceptMaximum.reduce((acc, cur) => acc + cur)
}

export { miniMaxSum }
