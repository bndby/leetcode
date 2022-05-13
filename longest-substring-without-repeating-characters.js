/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length === 0) return 0;
  if (s.length === 1) return 1;

  let start = 0;
  let end = 1;
  const len = s.length;
  const chars = new Set(s[start]);
  let counter = 1;

  while (start < len && end < len) {
    if (chars.has(s[end])) {
      counter = Math.max(chars.size, counter);
      chars.delete(s[start]);
      start++;
    } else {
      chars.add(s[end]);
      end++;
    }
  }
  return Math.max(chars.size, counter);
};

console.log("abcabcbb", lengthOfLongestSubstring("abcabcbb") === 3);
console.log("bbbbb", lengthOfLongestSubstring("bbbbb") === 1);
console.log("pwwkew", lengthOfLongestSubstring("pwwkew") === 3);
console.log("abc", lengthOfLongestSubstring("abc") === 3);
console.log("pf", lengthOfLongestSubstring("pf") === 2);
console.log("p", lengthOfLongestSubstring("p") === 1);
console.log("", lengthOfLongestSubstring("") === 0);
console.log("dvdf", lengthOfLongestSubstring("dvdf") === 3);
