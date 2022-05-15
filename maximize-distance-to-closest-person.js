/**
 * https://leetcode.com/problems/maximize-distance-to-closest-person/
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function (seats) {
  const s = seats.join("");
  const ss = s.split("1");

  // borders
  if (ss[0][0] === "0") {
    ss[0] = ss[0].padStart(2 * ss[0].length - 1, "0");
  }

  const lastPos = ss.length - 1;

  if (ss[lastPos][0] === "0") {
    ss[lastPos] = ss[lastPos].padEnd(2 * ss[lastPos].length - 1, "0");
  }
  return Math.trunc((Math.max(...ss.map((s) => s.length)) - 1) / 2 + 1);
};

console.log("[1,0,0,0,1,0,1] = 2", maxDistToClosest([1, 0, 0, 0, 1, 0, 1]));
console.log("[1,0,0,0] = 3", maxDistToClosest([1, 0, 0, 0]));
console.log("[0,1] = 1", maxDistToClosest([0, 1]));
console.log("[0,0,1] = 2", maxDistToClosest([0, 0, 1]));
