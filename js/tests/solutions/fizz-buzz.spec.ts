import { fizzBuzz } from '@solutions/fizz-buzz'

test('fizzBuzz', () => {
  const n = 15

  const actual = fizzBuzz(n)
  const expected = [
    '1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz',
    '11', 'Fizz', '13', '14', 'FizzBuzz'
  ]

  expect(actual).toEqual(expected)
})
