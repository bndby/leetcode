/**
 * https://leetcode.com/problems/zigzag-conversion/
 *
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  // borders
  if (numRows === 1) return s;
  if (numRows === 2) {
    let first = "";
    let second = "";
    s.split("").forEach((char, index) => {
      index % 2 ? (second += char) : (first += char);
    });
    return first + second;
  }

  // main
  const zigzagLen = numRows * 2 - 2;
  const sLen = s.length;
  const zigzagCount = Math.trunc(sLen / zigzagLen) + 1;
  const chars = s.split("");
  chars.length += zigzagLen - (sLen % zigzagLen);
  chars.fill("", sLen);

  const rows = new Array(numRows).fill("");

  for (let row = 0; row < numRows; row++) {
    for (let zigzag = 0; zigzag < zigzagCount; zigzag++) {
      if (row === 0 || row === numRows - 1) {
        rows[row] += chars[zigzag * zigzagLen + row];
      } else {
        rows[row] +=
          chars[zigzag * zigzagLen + row] +
          chars[(zigzag + 1) * zigzagLen - row];
      }
    }
  }

  return rows.join("");
};

console.log(
  "PAYPALISHIRING ===",
  convert("PAYPALISHIRING", 3),
  convert("PAYPALISHIRING", 3) === "PAHNAPLSIIGYIR"
);

console.log(
  "PAYPALISHIRING ===",
  convert("PAYPALISHIRING", 4),
  convert("PAYPALISHIRING", 4) === "PINALSIGYAHRPI"
);

console.log(
  "ABCDEFG ===",
  convert("ABCDEFG", 2),
  convert("ABCDEFG", 2) === "ACEGBDF"
);

console.log("A", convert("A", 1) === "A");
