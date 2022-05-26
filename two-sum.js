/**
 * https://leetcode.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function (nums, target) {
//   const indexedNums = nums.map((num, index) => [num, index]);

//   indexedNums.sort((a, b) => a[0] - b[0]);

//   const len = indexedNums.length;

//   for (let first = 0; first < len; first++) {
//     for (let second = first + 1; second < len; second++) {
//       if (indexedNums[first][0] + indexedNums[second][0] === target)
//         return [indexedNums[first][1], indexedNums[second][1]];
//       if (indexedNums[first][0] + indexedNums[second][0] > target) break;
//     }
//   }
// };

var twoSum = function (nums, target) {
  const len = nums.length;
  const seen = new Map([[nums[0], 0]]);
  for (let i = 1; i < len; i++) {
    if (seen.has(target - nums[i])) {
      return [seen.get(target - nums[i]), i];
    } else {
      seen.set(nums[i], i);
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
