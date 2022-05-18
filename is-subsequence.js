/**
 * https://leetcode.com/problems/is-subsequence/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  if (s === "") return true;
  if (s.length > t.length) return false;
  const founded = t.indexOf(s[0]);
  return (
    Boolean(founded + 1) &&
    isSubsequence(s.substring(1), t.substring(founded + 1))
  );
};

console.log("abc, ahbgdc = true | ", isSubsequence("abc", "ahbgdc"));
console.log("axc, ahbgdc = false | ", isSubsequence("axc", "ahbgdc"));
