function flipAndInvertImage (A: Array<Array<number>>): Array<Array<number>> {
  const row = A.length
  const col = A[0].length
  const arr = []
  let arrInArr = []

  for (let i = 0; i < row; i++) {
    for (let j = col - 1; j >= 0; j--) {
      if (A[i][j] === 0) { arrInArr.push(1) } else { arrInArr.push(0) }
    }
    arr.push(arrInArr)
    arrInArr = []
  }

  return arr
};

export { flipAndInvertImage }
