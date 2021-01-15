/**
 * grading students by rounding according to some condition
 * @param grades students grades
 */
function gradingStudents (grades: number[]): number[] {
  return grades.map(getFinalGrade)
}

/**
 * return grade with rounding or without rounding
 * @param grade grade of student
 */
function getFinalGrade (grade: number): number {
  const nextMultiple = getNextMultiple(grade, 5)

  if (nextMultiple < 40) {
    return grade
  }

  return isRoundingRequired(grade, nextMultiple) ? nextMultiple : grade
}

/**
 * return next multiple base on given num
 * @param num
 * @param multiple
 */
function getNextMultiple (num: number, multiple: number): number {
  const times = Math.floor(num / multiple) + 1

  return times * multiple
}

/**
 * check rounding require
 * @param grade grade of student
 * @param nextMultiple next multiple base on grade of the student
 */
function isRoundingRequired (grade: number, nextMultiple: number): boolean {
  return nextMultiple - grade < 3
}

export { gradingStudents }
