/**
 * https://leetcode.com/problems/summary-ranges/
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  const len = nums.length;
  if (len === 0) return [];
  if (len === 1) return [nums[0].toString()];

  const res = [];
  let i = 0;
  let start = nums[i],
    end = nums[i];
  while (i < len) {
    if (nums[i] !== nums[i + 1] - 1) {
      end = nums[i];
      if (start === end) {
        res.push(start.toString());
      } else {
        res.push(`${start}->${end}`);
      }
      start = nums[i + 1];
    }
    i++;
  }
  return res;
};

console.log('["0->2","4->5","7"] = ', summaryRanges([0, 1, 2, 4, 5, 7]));
console.log('["0","2->4","6","8->9"] = ', summaryRanges([0, 2, 3, 4, 6, 8, 9]));
