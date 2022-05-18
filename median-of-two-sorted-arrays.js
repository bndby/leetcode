/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let len1 = nums1.length,
    len2 = nums2.length;
  let i1 = 0,
    i2 = 0;
  let merged = [];
  while (i1 < len1 && i2 < len2) {
    if (nums1[i1] < nums2[i2]) {
      merged.push(nums1[i1++]);
    } else {
      merged.push(nums2[i2++]);
    }
  }
  if (i1 === len1) {
    merged = [...merged.concat(...nums2.slice(i2))];
  } else {
    merged = [...merged.concat(...nums1.slice(i1))];
  }

  //
  const l = merged.length;
  return l % 2
    ? merged[Math.trunc(l / 2)]
    : (merged[Math.trunc(l / 2)] + merged[Math.trunc(l / 2) - 1]) / 2;
};

console.log("nums1 = [3], nums2 = []", findMedianSortedArrays([3], []));
console.log("nums1 = [1,3], nums2 = [2]", findMedianSortedArrays([1, 3], [2]));
console.log(
  "nums1 = [1,2], nums2 = [3,4]",
  findMedianSortedArrays([1, 2], [3, 4])
);
