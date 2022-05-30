/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  if (num1 === "0" || num2 === "0") return "0";
  const len1 = num1.length;
  const len2 = num2.length;

  const res = new Array(len1 + len2).fill(0);

  for (let i2 = len2 - 1; i2 >= 0; i2--) {
    for (let i1 = len1 - 1; i1 >= 0; i1--) {
      res[len1 + len2 - i2 - i1 - 2] +=
        (Number(num2[i2]) * Number(num1[i1])) % 10;
      res[len1 + len2 - i2 - i1 - 1] += Math.trunc(
        (Number(num2[i2]) * Number(num1[i1])) / 10
      );
    }
  }
  for (let i = 0; i < res.length; i++) {
    if (res[i] > 9) {
      res[i + 1] += Math.trunc(res[i] / 10);
      res[i] = res[i] % 10;
    }
  }
  if (res[res.length - 1] === 0) {
    res.length--;
  }

  return res.reverse().join("");
};

console.log(multiply("999", "999"));
