import { gradingStudents } from '@solutions/grading-students'

test('gradingStudents', () => {
  const gradesOfStudens = [73, 67, 38, 33]

  const actual = gradingStudents(gradesOfStudens)
  const expected = [75, 67, 40, 33]

  expect(actual).toEqual(expected)
})
