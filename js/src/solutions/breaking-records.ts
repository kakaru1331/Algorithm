let minScore = Number.MAX_SAFE_INTEGER
let maxScore = Number.MIN_SAFE_INTEGER
let minCount = 0
let maxCount = 0
let tempScores: number[] = []

/**
 * returning number of renewals. score high and low
 * @param scores Maria's scores by game
 * @returns numbers of renewals. highest and lowest
 */
function breakingRecords (scores: number[]): number[] {
  for (const s of scores) {
    tempScores = checkScore(tempScores, s)
  }

  return [maxCount, minCount]
}

function checkScore (scores: number[], score: number): number[] {
  if (scores.length === 0) {
    minScore = score
    maxScore = score
    return [...scores, score]
  }

  if (score < minScore) {
    minScore = score
    minCount++
  } else if (score > maxScore) {
    maxScore = score
    maxCount++
  }

  return [...scores, score]
}

export { breakingRecords }
