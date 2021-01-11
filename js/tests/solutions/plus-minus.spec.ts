import { plusMinus } from '@solutions/plus-minus'

test('plusMinus', () => {
  const arr = [1, 1, 0, -1, -1]
  console.log = jest.fn()

  plusMinus(arr)

  expect(console.log).toHaveBeenCalledTimes(3)
})
