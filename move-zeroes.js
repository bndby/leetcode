/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  //   let i = 0;
  //   let top = nums.length;
  //   while (i < top) {
  //     if (nums[i] === 0) {
  //       nums.splice(i, 1);
  //       nums.push(0);
  //       top--;
  //     } else {
  //       i++;
  //     }
  //   }
  //   return nums;
  for (let lastNonZero = 0, cur = 0; cur < nums.length; cur++) {
    if (nums[cur] !== 0) {
      const a = nums[cur];
      nums[cur] = nums[lastNonZero];
      nums[lastNonZero] = a;
      lastNonZero++;
    }
  }
  return nums;
};

console.log("[0,1,0,3,12]", moveZeroes([0, 1, 0, 3, 12]));
console.log("[0]", moveZeroes([0]));
