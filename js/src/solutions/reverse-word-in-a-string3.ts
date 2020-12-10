/**
 * reversed string
 * @param s string
 */
function reverseWords (s: string): string {
  const forPalindrome: string[] = []
  const strArr = s.split(' ')

  strArr.forEach(x => {
    const tmp = x.split('').reverse().join('')
    forPalindrome.push(tmp)
  })

  const palindrome = forPalindrome.join(' ')

  return palindrome
}

export { reverseWords }
