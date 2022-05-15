/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  let sign = 1;
  s = s.trim();
  if (s[0] === "-") {
    sign = -1;
    s = s.slice(1);
  } else if (s[0] === "+") {
    s = s.slice(1);
  }
  let ind = 0;
  let num = "";
  const len = s.length;
  const MAX = 2 ** 31 - 1;
  const MIN = -1 * 2 ** 31;
  let n = 0;

  while (ind < len && s[ind].match(/\d+/)) {
    n = sign * Number((num += s[ind++]));
    if (n > MAX) {
      return MAX;
    }
    if (n < MIN) {
      return MIN;
    }
  }
  return n;
};

console.log("42", myAtoi("42"), myAtoi("42") === 42);
console.log("   -42", myAtoi("   -42"), myAtoi("   -42") === -42);
console.log(
  "4193 with words",
  myAtoi("4193 with words"),
  myAtoi("4193 with words") === 4193
);
console.log(
  "-91283472332",
  myAtoi("-91283472332"),
  myAtoi("-91283472332") === -2147483648
);
console.log("-+12", myAtoi("-+12"), myAtoi("-+12") === 0);
console.log("+-12", myAtoi("+-12"), myAtoi("+-12") === 0);
