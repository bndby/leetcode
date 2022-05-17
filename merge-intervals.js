/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((i1, i2) => i1[0] - i2[0]);

  let i = 0;
  while (i < intervals.length - 1) {
    // covered interval and border dot
    if (
      (intervals[i][0] <= intervals[i + 1][0] &&
        intervals[i][1] >= intervals[i + 1][1]) ||
      (intervals[i][1] === intervals[i + 1][0] &&
        intervals[i][1] === intervals[i + 1][1])
    ) {
      intervals.splice(i + 1, 1);
    } else if (intervals[i][1] >= intervals[i + 1][0]) {
      intervals[i][1] = intervals[i + 1][1];
      intervals.splice(i + 1, 1);
    } else {
      i++;
    }
  }

  return intervals;
};

console.log(
  "[[1,3],[2,6],[8,10],[15,18]]",
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);
console.log(
  "[[1,4],[4,5]]",
  merge([
    [1, 4],
    [4, 5],
  ])
);
console.log(
  "[[1,4],[2,3]]",
  merge([
    [1, 4],
    [2, 3],
  ])
);
console.log(
  "[[1,4],[0,0]]",
  merge([
    [1, 4],
    [0, 0],
  ])
);
