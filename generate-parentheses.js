/**
 * https://leetcode.com/problems/generate-parentheses/
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let res = [];

  const generate = function (n, curr = "", opened = 0, closed = 0) {
    if (curr.length === 2 * n) {
      return res.push(curr);
    }
    if (opened < n) {
      generate(n, curr + "(", opened + 1, closed);
    }
    if (closed < opened) {
      generate(n, curr + ")", opened, closed + 1);
    }
  };

  generate(n);
  return res;
};

console.log(generateParenthesis(3));
