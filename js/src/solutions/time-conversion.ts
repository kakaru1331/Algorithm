/**
 * convert time from 12-hour clcok to 24
 * @param s formatted time
 * @returns 24 format time
 */
function timeConversion (s: string): string {
  let convertedTime = null

  const isPM = s.includes('PM')
  const timeExcpet12Hour = s.substring(0, s.length - 2)

  convertedTime = isPM
    ? convertFromPM(timeExcpet12Hour)
    : convertFromAM(timeExcpet12Hour)

  return convertedTime
}

/**
 * convert time from AM to 24
 * @param time 12-hour format time
 * @returns 24 format time
 */
function convertFromAM (time: string): string {
  const hh = time.substring(0, 2)

  if (Number(hh) !== 12) {
    return time
  }

  const h1 = 0
  const h2 = 0

  const serializedTime = time.split('')

  serializedTime[0] = h1.toString()
  serializedTime[1] = h2.toString()

  return serializedTime.join('')
}

/**
 * convert time from PM to 24
 * @param time 12-hour format time
 * @returns 24 format time
 */
function convertFromPM (time: string): string {
  const hh = time.substring(0, 2)

  if (Number(hh) === 12) {
    return time
  }

  const h1 = Number(hh[0]) + 1
  const h2 = Number(hh[1]) + 2

  const serializedTime = time.split('')

  serializedTime[0] = h1.toString()
  serializedTime[1] = h2.toString()

  return serializedTime.join('')
}

export { timeConversion }
