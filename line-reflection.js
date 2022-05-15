/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isReflected = function (points) {
  // borders
  if (points.length === 1) return true;

  const maxX = Math.max(...points.map((point) => point[0])); // O(n)
  const minX = Math.min(...points.map((point) => point[0])); // O(n)
  const centerX = (maxX + minX) / 2;

  // filter center points
  points = points.filter((a) => a[0] != centerX); // O(n)
  if (points.length === 0) return true;

  // remove duplicates
  points.sort((a, b) => a[0] - b[0]); // O(n*log(N))

  let i = 1;
  while (i < points.length) {
    // O(n)
    if (
      points[i][0] === points[i - 1][0] &&
      points[i][1] === points[i - 1][1]
    ) {
      points.splice(i, 1);
    } else {
      i++;
    }
  }

  // console.log(">>> ", points);

  // compare points
  const dots = [];
  points.forEach(
    // O(n)
    (point) => (dots[point[1]] = (dots[point[1]] ?? 0) + point[0] - centerX)
  );

  return dots.flat().every((i) => i === 0); // O(2*n)
};

console.log(
  "[[1,1],[-1,1]] = true",
  isReflected([
    [1, 1],
    [-1, 1],
  ])
);
console.log(
  "[[1,1],[-1,-1]] = false",
  isReflected([
    [1, 1],
    [-1, -1],
  ])
);
console.log(
  "[[3,1],[1,1],[1,1],[4,2],[0,2],[2,2],[4,2]] = true",
  isReflected([
    [3, 1],
    [1, 1],
    [1, 1],
    [4, 2],
    [0, 2],
    [2, 2],
    [4, 2],
  ])
);
console.log(
  "[[1,2],[2,2],[1,4],[2,4]] = true",
  isReflected([
    [1, 2],
    [2, 2],
    [1, 4],
    [2, 4],
  ])
);

console.log(
  "[[0,0],[1,1],[2,2],[3,3],[4,4],[0,5],[-1,6],[-2,7],[-3,8],[-4,9]] = false",
  isReflected([
    [0, 0],
    [1, 1],
    [2, 2],
    [3, 3],
    [4, 4],
    [0, 5],
    [-1, 6],
    [-2, 7],
    [-3, 8],
    [-4, 9],
  ])
);
