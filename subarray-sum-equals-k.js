/**
 * https://leetcode.com/problems/subarray-sum-equals-k/
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let ans = 0,
    prefsum = 0;
  const d = new Map([[0, 1]]);

  nums.forEach((num) => {
    prefsum += num;
    if (d.has(prefsum - k)) {
      ans += d.get(prefsum - k);
    }
    if (!d.has(prefsum)) {
      d.set(prefsum, 1);
    } else {
      d.set(prefsum, d.get(prefsum) + 1);
    }
  });
  console.log(d);
  return ans;
};

console.log("[1,1,1], 2 = 2 =>", subarraySum([1, 1, 1], 2));
console.log("[1,2,3], 3 = 2 =>", subarraySum([1, 2, 3], 3));
console.log("[1,-1,0], 0 = 3 =>", subarraySum([1, -1, 0], 0));
console.log("[0,0,0], 0 = 6 =>", subarraySum([0, 0, 0], 0));
