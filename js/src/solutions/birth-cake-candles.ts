/**
 * count how many candles are tallest
 * @param candles height of candles
 */
function birthdayCakeCandles (candles: number[]): number {
  const maximumHeight = getMaximumHeight(candles)
  const countOfTallestCandle = getCountOfEqualHeightCandle(candles, maximumHeight)

  return countOfTallestCandle
}

/**
 * return height of tallest candle
 * @param candles height of candles
 */
function getMaximumHeight (candles: number[]): number {
  let maximumHeight = 0

  candles.forEach((heightOfCandle) => {
    if (maximumHeight < heightOfCandle) {
      maximumHeight = heightOfCandle
    }
  })

  return maximumHeight
}

/**
 * return candles count that the same height
 * @param candles height of candles
 * @param height search keyword (height)
 */
function getCountOfEqualHeightCandle (candles: number[], height: number) {
  const copiedCandels = [...candles]

  let count = 0
  let index = 0
  while (true) {
    index = copiedCandels.indexOf(height)

    if (index === -1) {
      break
    }

    count++
    copiedCandels.splice(index, 1)
  }

  return count
}

export { birthdayCakeCandles }
