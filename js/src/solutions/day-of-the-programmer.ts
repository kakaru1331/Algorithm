/**
 * 256th day of the year
 * @param year - a year by time-traveling
 */
function dayOfProgrammer (year: number): string {
  const result = isLeapYear(year)

  const leapYear = '2000'
  const nonLeapYear = '2001'

  const mockYear = result ? leapYear : nonLeapYear

  // when the next day after January 31st was February 14th.
  // This means that in 1918, February 14th was the 32nd day of the year in Russia.
  const nthDay = year === 1918 ? 256 + 13 : 256

  const mockDate = new Date(mockYear)
  mockDate.setDate(mockDate.getDate() + nthDay - 1)

  const day = format(mockDate.getDate())
  const month = format(mockDate.getMonth() + 1)

  return `${day}.${month}.${year}`
}

function isLeapYear (year: number): boolean {
  if (year < 1918) { // Julian calendar
    if (year % 4 === 0) {
      return true
    }
  } else { // Gregorian calendar
    if (year % 400 === 0 ||
          (year % 4 === 0 && year % 100 !== 0)
    ) {
      return true
    }
  }

  return false
}

function format (date: number): string {
  return date < 10 ? `0${date}` : date.toString()
}

export { dayOfProgrammer }
