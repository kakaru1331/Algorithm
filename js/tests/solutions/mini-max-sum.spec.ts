import { miniMaxSum } from '@solutions/mini-max-sum'

test('miniMaxSum', () => {
  const arr = [1, 3, 5, 7, 9]
  console.log = jest.fn()

  miniMaxSum(arr)

  const minimumValue = 16
  const maximumValue = 24

  expect(console.log).toHaveBeenCalledWith(`${minimumValue} ${maximumValue}`)
})
