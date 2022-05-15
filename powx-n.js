/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

// var myPow = function (x, n) {
//   return (x ** n).toFixed(5);
// };

var myPow = function (x, n) {
  if (n === 0) return 1;
  if (x === 0) return 0;
  if (x === 1) return 1;

  if (n < 0) {
    return myPow(1 / x, -1 * n);
  }

  if (x === -1) return n % 2 ? -1 : 1;

  let mul = x;
  for (let i = 1; i < n; i++) {
    mul *= x;
    if (mul < 0.00001 && mul > -0.00001) return 0;
  }
  return mul.toFixed(5);
};

console.log("x = 2.00000, n = 10", myPow(2.0, 10));
console.log("x = 2.10000, n = 3", myPow(2.1, 3));
console.log("x = 2.00000, n = -2", myPow(2.0, -2));
console.log("x = 2.00000, n = -2147483648", myPow(2.0, -2147483648));
console.log("x = -13.62608, n = 3", myPow(-13.62608, 3));
console.log("x = -1.00000, n = -2147483648", myPow(-1.0, -2147483648));
