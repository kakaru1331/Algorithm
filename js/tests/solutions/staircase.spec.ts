import { staircase } from '@solutions/staircase'

test('staircase', () => {
  const n = 4
  console.log = jest.fn()

  staircase(n)

  expect(console.log).toHaveBeenCalledTimes(n)
})
