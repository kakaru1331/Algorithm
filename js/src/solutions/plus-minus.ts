/**
 * print the ratio of kinds array has
 * @param arr number array could contain three kind of (positive, negative and zero)
 */
function plusMinus (arr: number[]) {
  let countOfPositive = 0
  let countOfNegitive = 0
  let countOfZero = 0
  const totalCount = arr.length

  for (let i = 0; i < totalCount; i++) {
    if (arr[i] > 0) {
      countOfPositive++
    } else if (arr[i] < 0) {
      countOfNegitive++
    } else {
      countOfZero++
    }
  }

  console.log((countOfPositive / totalCount).toFixed(6))
  console.log((countOfNegitive / totalCount).toFixed(6))
  console.log((countOfZero / totalCount).toFixed(6))
}

export { plusMinus }
