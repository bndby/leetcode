/**
 * https://leetcode.com/problems/string-compression/
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  if (chars.length < 2) return chars.length;

  let i = 0;
  while (i < chars.length) {
    let ci = i + 1;
    while (ci < chars.length && chars[i] === chars[ci]) ci++;
    if (ci - i - 1 > 0) {
      const nums = `${ci - i}`.split("");
      chars.splice(i + 1, ci - i - 1, ...nums);
      i += 1 + nums.length;
    } else {
      i++;
    }
  }
  return chars.length;
};

compress(["a", "a", "b", "b", "c", "c", "c"]);
compress(["a"]);
compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]);
