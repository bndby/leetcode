/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];
  const map = {
    "}": "{",
    "]": "[",
    ")": "(",
  };

  let i = 0;
  while (i < s.length) {
    if ("({[".includes(s[i])) {
      stack.push(s[i]);
    } else {
      const sym = stack.pop();
      if (sym !== map[s[i]]) return false;
    }
    i++;
  }
  return !stack.length;
};

console.log("()", isValid("()"));
console.log("()[]{}", isValid("()[]{}"));
console.log("(]", isValid("(]"));
