/**
 * https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  if (nums.every((n) => n === 1)) return nums.length - 1;
  const len = nums.length;
  let maxSum = 0;
  for (let i = 0; i < len; i++) {
    if (nums[i] === 0) {
      let prev = i,
        next = i;
      if (i > 0) {
        prev = i;
        while (nums[prev - 1] === 1 && prev > 0) {
          prev--;
        }
      }
      if (i < len - 1) {
        next = i;
        while (nums[next + 1] === 1 && next < len - 1) {
          next++;
        }
      }
      if (maxSum < next - prev) {
        maxSum = next - prev;
      }
    }
  }
  return maxSum;
};

console.log("[1,1,0,1] = 3 ", longestSubarray([1, 1, 0, 1]));
console.log(
  "[0,1,1,1,0,1,1,0,1] = 5 ",
  longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1])
);
console.log("[1,1,1] = 2 ", longestSubarray([1, 1, 1]));
console.log("[0,0,0] = 0 ", longestSubarray([0, 0, 0]));
