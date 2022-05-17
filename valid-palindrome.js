/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.toLowerCase();
  s = s.replace(/[^a-z0-9]/g, "");

  // first
  const len = s.length / 2;
  for (let i = 0; i < len; i++) {
    if (s[i] !== s[s.length - i - 1]) return false;
  }
  return true;
  // second
  //   ss = s.split("").reverse().join("");
  //   console.log(">", s, "|", ss);
  //   return ss === s;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(" "));
