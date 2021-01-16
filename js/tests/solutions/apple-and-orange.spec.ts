import { countApplesAndOranges } from '@solutions/apple-and-orange'

test('countApplesAndOranges', () => {
  const startingPointOfTheHouse = 7
  const endPointOfTheHouse = 11
  const locationOfTheAppleTree = 5
  const locationOfTheOrangeTree = 15
  const apples = [-2, 2, 1]
  const oragnes = [5, -6]

  const spy = jest.spyOn(console, 'log')

  countApplesAndOranges(startingPointOfTheHouse, endPointOfTheHouse, locationOfTheAppleTree, locationOfTheOrangeTree, apples, oragnes)

  expect(spy.mock.calls.length).toBe(2)
  expect(spy.mock.calls[0][0]).toBe(1)
  expect(spy.mock.calls[1][0]).toBe(1)
})
