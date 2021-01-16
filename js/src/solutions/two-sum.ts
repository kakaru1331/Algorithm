/**
 * indices of the two numbers such that they add up to target
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum (nums: number[], target: number) {
  const answer = []
  let firstIndex = -1
  let secondIndex = -1

  for (firstIndex = 0; firstIndex < nums.length; firstIndex++) {
    for (secondIndex = firstIndex + 1; secondIndex < nums.length; secondIndex++) {
      if (nums[firstIndex] + nums[secondIndex] === target) {
        answer.push(firstIndex)
        answer.push(secondIndex)
        return answer
      }
    }
  }
};

export { twoSum }
