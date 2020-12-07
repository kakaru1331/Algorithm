import { calPoints } from '@solutions/baseball-game'

test('calPoints', () => {
  const ops = ["5","2","C","D","+"]

  const actual = calPoints(ops)
  const expected = 30
  
  expect(actual).toBe(expected)
})