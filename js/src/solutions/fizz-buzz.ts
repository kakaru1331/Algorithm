/**
 * fizz buzz
 * @param n a number
 * @returns fizz buzz from 1 to input number
 */
function fizzBuzz (n: number): Array<string> {
  const arr = []

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push('FizzBuzz')
    } else if (i % 3 === 0) {
      arr.push('Fizz')
    } else if (i % 5 === 0) {
      arr.push('Buzz')
    } else {
      arr.push(i.toString())
    }
  }

  return arr
}

export { fizzBuzz }
