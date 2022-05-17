/**
 * https://leetcode.com/problems/evaluate-reverse-polish-notation/
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const op = "+-*/";
  const stack = [];

  tokens.forEach((t) => {
    if (op.includes(t)) {
      b = stack.pop();
      a = stack.pop();
      switch (t) {
        case "+":
          stack.push(a + b);
          break;
        case "-":
          stack.push(a - b);
          break;
        case "*":
          stack.push(a * b);
          break;
        case "/":
          stack.push(Math.trunc(a / b));
          break;
      }
    } else {
      stack.push(Number(t));
    }
  });
  return stack.pop();
};

console.log('9 = ["2","1","+","3","*"] = ', evalRPN(["2", "1", "+", "3", "*"]));
console.log(
  '6 = ["4","13","5","/","+"] = ',
  evalRPN(["4", "13", "5", "/", "+"])
);
console.log(
  '22 = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"] = ',
  evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])
);
