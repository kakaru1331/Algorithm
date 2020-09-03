/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {    
  let answer = [];
  let firstIndex = -1;
  let secondIndex = -1;
  
  for (firstIndex=0; firstIndex<nums.length; firstIndex++) {
      for (secondIndex=firstIndex+1; secondIndex<nums.length; secondIndex++) {
          if (nums[firstIndex] + nums[secondIndex] === target) {
              answer.push(firstIndex);
              answer.push(secondIndex);
              return answer;
          }                
      }
  }
  
};